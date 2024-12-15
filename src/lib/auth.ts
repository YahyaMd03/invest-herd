import { AuthOptions } from "next-auth";
import prisma from "@/db";
import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import {session} from "./session";

export const authOptions: AuthOptions = {
    providers: [
      // Google OAuth Provider
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
  
      // Email/Password Provider
      CredentialsProvider({
        name: "Email and Password",
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const { email, password } = credentials || {};
  
          if (!email || !password) {
            throw new Error("Email and password are required.");
          }
  
          const user = await prisma.user.findUnique({ where: { email } });
  
          if (!user || !user.password) {
            throw new Error("Invalid email or password.");
          }
  
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid email or password.");
          }
  
          return { id: user.id, name: user.name, email: user.email };
        },
      }),
    ],
    pages: {
      signIn: "/login", // Custom login page
    },
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async signIn({ account, profile }) {
          if (!profile?.email) {
            throw new Error('No profile')
          }
    
          await prisma.user.upsert({
            where: {
              email: profile.email,
            },
            create: {
              email: profile.email,
              name: profile.name,
            },
            update: {
              name: profile.name,
            },
          })
          return true
        },
        async redirect({ url, baseUrl }) {
          // Redirect user to dashboard after successful login
          return "/dashboard";
        },
        session, 
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id; // Set user ID during sign-in
          }
          return token;
        },
    },
  };
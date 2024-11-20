import prisma from '@/db';
import { compare, hash } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { SignJWT, importJWK, JWTPayload } from 'jose';


// Utility to generate JWT
const generateJWT = async (payload: JWTPayload) => {
  const secret = process.env.JWT_SECRET || 'secret';
  const jwk = await importJWK({ k: secret, alg: 'HS256', kty: 'oct' });

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('365d')
    .sign(jwk);

  return token;
};

// NextAuth configuration
export const authOptions = {
  providers: [
    // Google Sign-In Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // Email/Password Credentials Provider
    CredentialsProvider({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const hashedPassword = await hash(credentials.password, 10);
        console.log(credentials, "credentials");
        try {
          // Fetch user from the database
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });


          // Check password if user exists
          if (user && (await compare(credentials.password, user.password))) {
            const jwtToken = await generateJWT({ id: user.id });
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              jwtToken,
            };
          }

          // If user doesn't exist, return null
          return null;
        } catch (error) {
          console.error('Error during authentication:', error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || 'secret',
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.uid) {
        session.user.id = token.uid as string;
        session.user.jwtToken = token.jwtToken as string;
        session.user.role = process.env.ADMINS?.split(',').includes(session.user?.email ?? '')
          ? 'admin'
          : 'user';
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.id;
        token.jwtToken = user.jwtToken;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
} satisfies NextAuthOptions;

export default authOptions;

import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/db'; 
import { getServerSession } from 'next-auth';




// Define a schema for validation with Zod
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  passwordHash: z.string().min(8), // Ensure password is at least 8 characters
});

// Type inference for the user schema
type UserType = z.infer<typeof userSchema>;

// Named export for the POST request
export async function POST(request: Request) {
  try {
    // Parse and validate the incoming data using Zod
    const body: UserType = userSchema.parse(await request.json());

    const existingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (existingUser) {
      // Handle the duplicate email scenario
      return NextResponse.json({ error: 'A user with this email already exists.' }, { status: 409 });

    } 

    // Create the user in Prisma
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.passwordHash,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);

    // If the error is due to validation, return a 400 status
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    // For other errors, return a 500 status
    return NextResponse.json({ error: 'Unable to create user' }, { status: 500 });
  }
}

export async function GET(){
  const session = await getServerSession();
  return NextResponse.json({
    id: session
  })
}
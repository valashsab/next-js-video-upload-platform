import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { User } from '../../../../migrations/00000-createTableusers';
import { createUser, getUserByEmail } from '../../../database/users';

const signupSchema = z.object({
  email: z.string().min(3),
  password: z.string().min(3),
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.date(),
});

export type SignupResponseBodyPost =
  | {
      user: User;
    }
  | {
      errors: { message: string }[];
    };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<SignupResponseBodyPost>> {
  // Task: Implement the user registration workflow

  // 1. Get the user data from the request
  const body = await request.json();

  // 2. Validate the user data
  const result = signupSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.issues },
      {
        status: 400,
      },
    );
  }

  // 3. Check if user already exist in the database
  const user = await getUserByEmail(result.data.email);

  if (user) {
    return NextResponse.json(
      { errors: [{ message: 'email already exists' }] },
      { status: 403 },
    );
  }

  //  At this stage you can check if the password matches the confirm password

  // 4. Hash the plain password from the user
  const passwordHash = await bcrypt.hash(result.data.password, 12);

  // 5. Save the user information with the hashed password in the database
  const newUser = await createUser(result.data.email, passwordHash);

  if (!newUser) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new user' }] },
      { status: 406 },
    );
  }

  // 6. Return the new user information without the password hash
  return NextResponse.json({
    user: newUser,
  });
}

import crypto from 'node:crypto';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { User } from '../../../../migrations/00000-createTableUsers';
import { secureCookieOptions } from '../../../../util/cookies';
import { createSession } from '../../../database/sessions';
import { createUser, getUserByUserName } from '../../../database/users';

const signupSchema = z.object({
  userName: z.string().min(3),
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().min(3),
  password: z.string().min(3),
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
  console.log('Body: ', body);

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
  const user = await getUserByUserName(result.data.email);

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
  const newUser = await createUser(
    result.data.userName,
    result.data.firstName,
    result.data.lastName,
    result.data.email,
    passwordHash,
  );

  if (!newUser) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new user' }] },
      { status: 406 },
    );
  }

  // 4. Create a token
  const token = crypto.randomBytes(100).toString('base64');

  // 5. Create the session record
  const session = await createSession(newUser.id, token);

  if (!session) {
    return NextResponse.json(
      { errors: [{ message: 'Error creating the new session' }] },
      {
        status: 401,
      },
    );
  }

  // 6. Send the new cookie in the headers -> in util/cookies.ts to in order to be reused
  // cookies().set({
  //   name: 'sessionToken',
  //   value: session.token,
  //   httpOnly: true,
  //   path: '/',
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 24, // Expires in 24 hours,
  //   sameSite: 'lax', // this prevents CSRF attacks
  // });

  cookies().set({
    name: 'sessionToken',
    value: session.token,
    ...secureCookieOptions,
  });

  // 6. Return the new user information without the password hash
  return NextResponse.json({
    user: newUser,
  });
}

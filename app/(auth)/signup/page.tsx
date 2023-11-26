import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../database/sessions';
import SignupForm from './SignupForm';

export const metadata = {
  title: 'Sign up',
  description: 'then you are good to go to start uploading videos',
};

export default async function SignUpPage() {
  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is valid, redirect to home
  if (session) redirect('/');

  // 4. If the sessionToken cookie is invalid or doesn't exist, show the login form

  return (
    <div className="bg-custom-bg min-h-screen">
      {/* // <div className="bg-gradient-to-r from-red-300 to-gray-700 min-h-screen"> */}
      <SignupForm />
    </div>
  );
}

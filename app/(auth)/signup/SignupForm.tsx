'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
// import { string } from 'zod';
import { SignupResponseBodyPost } from '../../api/(auth)/signup/route';

export default function SignupForm() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !userName.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      setErrors([{ message: 'All input fields are required.' }]);
      return;
    }

    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        email,
        password,
      }),
    });

    const data: SignupResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    router.push(`/dashboard/${data.user.userName}`);

    // revalidatePath() throws unnecessary error, will be used when stable
    // revalidatePath('/(auth)/login', 'page');
    router.refresh();
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        <Image
          src="/images/user-icon.png"
          width="50"
          height="25"
          alt="memento logo"
          priority
          className="responsive"
        />
        <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={async (event) => await handleSignup(event)}
          noValidate
        >
          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-lg font-medium leading-6 text-white"
                htmlFor="userName"
              >
                User name <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="userName"
                name="userName"
                pattern="[A-Za-z]+"
                onChange={(event) => setUserName(event.currentTarget.value)}
                required
                aria-required="true"
                aria-label="User name"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-lg font-medium leading-6 text-white"
                htmlFor="firstName"
              >
                First name <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="firstName"
                name="firstName"
                pattern="[A-Za-z]+"
                onChange={(event) => setFirstName(event.currentTarget.value)}
                required
                aria-required="true"
                aria-label="First name"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-lg font-medium leading-6 text-white"
                htmlFor="lastName"
              >
                Last name <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="lastName"
                name="lastName"
                pattern="[A-Za-z]+"
                onChange={(event) => setLastName(event.currentTarget.value)}
                required
                aria-required="true"
                aria-label="Last name"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-lg font-medium leading-6 text-white"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="email"
                id="email"
                name="email"
                onChange={(event) => setEmail(event.currentTarget.value)}
                required
                aria-required="true"
                aria-label="Email"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-lg font-medium leading-6 text-white"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                id="password"
                name="password"
                pattern="[A-Za-z]+"
                onChange={(event) => setPassword(event.currentTarget.value)}
                required
                aria-required="true"
                aria-label="Password"
              />
            </div>
          </div>

          <div className="mt-10">
            <button className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign up
            </button>
          </div>

          {errors.map((error) => (
            <div
              className="alert alert-error  bg-red-100 text-red-500 mt-2"
              key={`error-${error.message}`}
            >
              Error: {error.message}
            </div>
          ))}
        </form>
        <p className="mt-10 text-center text-base text-gray-500">
          You already created a user?{' '}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

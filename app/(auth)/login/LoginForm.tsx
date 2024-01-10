'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userName.trim() || !password.trim()) {
      setErrors([{ message: 'Username and password are required.' }]);
      return;
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        userName,
        password,
      }),
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    //  This is not the secured way of doing returnTo
    // if (props.returnTo) {
    //   console.log('Checks Return to: ', props.returnTo);
    //   router.push(props.returnTo);
    // }

    router.push(
      getSafeReturnToPath(props.returnTo) || `/dashboard/${data.user.userName}`,
    );

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
          alt="user icon"
          priority
        />
        <h1 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-neutral">
          Login to your account
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={async (event) => await handleLogin(event)}
          noValidate
        >
          <div>
            <label
              className="block text-lg first-letter:font-medium leading-6 text-neutral"
              htmlFor="userName"
            >
              User name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="userName"
                name="userName"
                onChange={(event) => setUserName(event.currentTarget.value)}
                required
                aria-required="true"
                aria-label="login user name"
              />
            </div>
            {errors.map((error) =>
              error.message.includes('User name') ? (
                <div
                  className="alert alert-error  bg-red-100 text-red-600"
                  key={`error-${error.message}`}
                >
                  {error.message}
                </div>
              ) : null,
            )}
          </div>
          <div>
            <div className="mt-2">
              <label
                className="block text-lg font-medium leading-6 text-neutral"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(event) => setPassword(event.currentTarget.value)}
                  required
                  aria-required="true"
                  aria-label="login Password"
                />
              </div>
            </div>
            <div className="mt-10">
              <button className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-lg font-semibold leading-6 text-neutral shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login
              </button>
            </div>
            {errors.map((error) => (
              <div
                className="alert alert-error mt-4 bg-red-100 text-red-600"
                key={`error-${error.message}`}
              >
                Error: {error.message}
              </div>
            ))}
          </div>
        </form>

        <p className="mt-10 text-center text-base text-neutral">
          Not yet a user?{' '}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-indigo-700 hover:text-indigo-700"
            aria-label="Sign up here"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

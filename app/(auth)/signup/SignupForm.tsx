'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SignupResponseBodyPost } from '../../api/(auth)/signup/route';
import styles from './SignupForm.module.scss';

export default function SignupForm() {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleSignup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
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
  console.log('Date: ', dateOfBirth);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width="200"
          height="200"
          className="mx-auto h-10 w-auto"
          src="/logo/loremipsumlogo.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={async (event) => await handleSignup(event)}
        >
          <div>
            <label className={styles.label} htmlFor="userName">
              User name
            </label>
            <input
              className={styles.input}
              id="userName"
              name="userName"
              pattern="[A-Za-z]+"
              onChange={(event) => setUserName(event.currentTarget.value)}
              required
            />
          </div>
          <br />
          {/* <label className={styles.label} htmlFor="firstName"> */}
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              // className={styles.input}
              id="firstName"
              name="firstName"
              pattern="[A-Za-z]+"
              onChange={(event) => setFirstName(event.currentTarget.value)}
              required
            />
          </div>
          <br />
          <label className={styles.label} htmlFor="lastName">
            Last name
          </label>
          <input
            className={styles.input}
            id="lastName"
            name="lastName"
            pattern="[A-Za-z]+"
            onChange={(event) => setLastName(event.currentTarget.value)}
            required
          />
          <br />
          <label className={styles.label} htmlFor="dateOfBirth">
            Date of birth{' '}
          </label>
          <input
            className={styles.input}
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={(event) => setDateOfBirth(event.currentTarget.value)}
            required
          />
          <br />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            required
          />
          <br />
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className={styles.input}
            id="password"
            name="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            required
          />
          <br />
          <button className={styles.signUpButton}>Sign up</button>
          {errors.map((error) => (
            <div className="error" key={`error-${error.message}`}>
              Error: {error.message}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

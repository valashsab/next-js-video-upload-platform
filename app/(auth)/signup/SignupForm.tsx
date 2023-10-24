'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SignupResponseBodyPost } from '../../api/(auth)/signup/route';
import styles from './SignupForm.module.scss';

export default function SignupForm() {
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
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
      }),
    });

    const data: SignupResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    // error message to be debugged!!!
    // router.push(`/dashboard_videos/${data.user.email}`);
    router.push('/');
  }

  return (
    <form onSubmit={async (event) => await handleSignup(event)}>
      <label className={styles.label} htmlFor="firstName">
        First name
      </label>
      <input
        className={styles.input}
        id="firstName"
        name="firstName"
        pattern="[A-Za-z]+"
        onChange={(event) => setFirstName(event.currentTarget.value)}
        required
      />
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
        <div key={`error-${error.message}`}>Error: {error.message}</div>
      ))}
    </form>
  );
}

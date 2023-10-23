'use client';
import styles from './SignupForm.module.scss';

export default function SignupForm() {
  return (
    <div>
      <form>
        <label className={styles.label} htmlFor="firstName">
          First name
        </label>
        <input
          className={styles.input}
          id="firstName"
          name="firstName"
          pattern="[A-Za-z]+"
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
          // pattern="[A-Za-z]+"
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
          required
        />
        <br />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          id="password"
          name="password"
          required
        />
        <br />
        <button className={styles.signUpButton}>Sign up</button>
      </form>
    </div>
  );
}

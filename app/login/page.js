import styles from './page.module.scss';

export default function loginPage() {
  return (
    <div>
      <h1>Login</h1>
      <form>
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
        <button className={styles.confirmButton}>Login</button>
      </form>
    </div>
  );
}

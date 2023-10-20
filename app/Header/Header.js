import Link from 'next/link';
import styles from '../globals.css';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="navHome">
            <Link className="headerLinks" href="/">
              Home
            </Link>
            <form>
              {/* <label className={styles.label} htmlFor="search">
                Search
              </label> */}
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                required
                placeholder="search"
              />
            </form>
            <br />
          </li>
          <li className="navProductsAbout">
            <Link className="headerCredentialButtons" href="/signup">
              <div>
                <button>Sign up</button>
              </div>
            </Link>
          </li>
          <li>
            <Link className="headerCredentialButtons" href="/login">
              <div>
                <button>Login</button>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

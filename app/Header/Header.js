import Link from 'next/link';
import LogoutButton from '../api/(auth)/logout/LogoutButton';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="headerLinks" href="/">
              Home
            </Link>

            <br />
          </li>
          <li>
            <Link href="/signup">Sign up</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

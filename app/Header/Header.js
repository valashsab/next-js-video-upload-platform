import { cookies } from 'next/headers';
import Link from 'next/link';
import LogoutButton from '../api/(auth)/logout/LogoutButton';
import { getUserBySessionToken } from '../database/users';

export default async function Header() {
  // Task: Display the logged in user's username in the navigation bar and hide the login and register links depending on whether the user is logged in or not
  // 3. Make decision whether to show the login and register links or not

  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    <header className="bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <ul>
          <li>
            <Link className="headerLinks" href="/">
              Home
            </Link>

            <br />
          </li>
          {/* <li>
            <Link href="/signup">Sign up</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <LogoutButton />
          </li> */}
        </ul>
        <br />
        <div>
          <form>
            <label id="searchBar" name="searchBar" htmlFor="searchBar">
              Search
            </label>
            <input id="searchBar" name="searchBar" />
          </form>
        </div>
        <br />
        <br />

        <div>
          {user ? (
            <>
              <div>{user.userName}</div>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/signup">Sign up</Link>
              <Link href="/login">Login</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

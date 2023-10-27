import '../globals.css';
import { cookies } from 'next/headers';
import Link from 'next/link';
import LogoutButton from '../api/(auth)/logout/LogoutButton';
import { getUserBySessionToken } from '../database/users';

// export default async function Header() {
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
    <div className="navbar bg-gradient-to-r from-red-300 to-gray-700 ...">
      <div className="navbar-start">
        <Link className="text-black" href="/">
          Home
        </Link>
      </div>

      <div className="navbar-center  join">
        <div>
          <input
            className="input input-bordered join-item"
            id="searchBar"
            name="searchBar"
            placeholder="Search"
          />
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>
            Filter
          </option>
          <option>Placeholder 1</option>
          <option>Placeholder 2</option>
          <option>Placeholder 3</option>
        </select>
        <div className="indicator">
          <button className="btn join-item">Search</button>
        </div>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                {' '}
                <img
                  src="/images/hamburger_navbar.png"
                  width="50"
                  height="50"
                  alt="hamburger menu navbar"
                />
              </summary>
              <ul className="p-2 bg-base-100">
                {user ? (
                  <>
                    <li>
                      {' '}
                      {user.userName.charAt(0).toUpperCase() +
                        user.userName.slice(1)}
                    </li>

                    <LogoutButton />
                  </>
                ) : (
                  <>
                    <li>
                      <Link class="text-white " href="/signup">
                        Sign up
                      </Link>
                    </li>
                    <li>
                      {' '}
                      <Link class="text-white" href="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

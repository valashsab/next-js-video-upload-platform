import '../globals.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
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
    <div className="navbar bg-custom-bg">
      {/* <div className="navbar-start"> */}
      <div className="flex-1">
        <Link className="text-black" href="/">
          <Image
            src="/images/frame.svg"
            width="350"
            height="300"
            alt="memento logo"
            priority
          />
        </Link>
        {/* </div> */}
      </div>
      <div className="navbar-center join" />

      {/* hamburger with overlay */}
      <div className="navbar-end flex justify-end">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              <Image
                src="/images/hamburger_navbar.png"
                width="50"
                height="50"
                alt="hamburger menu navbar"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            />
            <ul className="menu p-4 w-80 min-h-full bg-base-200  bg-opacity-75 text-base-content">
              {/* Sidebar content here */}
              {user ? (
                <>
                  <li className="text-black bg-primary mt-2 rounded p-2">
                    {' '}
                    {user.userName.charAt(0).toUpperCase() +
                      user.userName.slice(1)}
                  </li>
                  <li>
                    {' '}
                    <Link
                      className="text-white"
                      href={`/dashboard/${user.userName}`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white"
                      href={`/videos/${user.userName}`}
                    >
                      Videos
                    </Link>
                  </li>
                  <li className="text-white">
                    <LogoutButton />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="text-white mt-2" href="/signup">
                      Sign up
                    </Link>
                  </li>
                  <li>
                    {' '}
                    <Link className="text-white mt-2" href="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

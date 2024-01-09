import '../globals.css';
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from '../api/(auth)/logout/LogoutButton';
import { getUserBySessionToken } from '../database/users';

export default async function Header() {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    // added 09.01.24

    <div className="navbar bg-custom-bg flex items-center">
      {/* <div className="navbar bg-custom-bg"> */}

      <div className="flex-1">
        <Link className="text-black" href="/">
          <Image
            src="/images/frame.svg"
            width={200}
            height={150}
            alt="memento logo"
            priority
          />
        </Link>
      </div>
      <div className="flex-none">
        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
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
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
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
        {/* <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="text-black">Hamburger icon</summary>
              <ul className="p-2 bg-base-100 text-black">
                <li>
                  <a>Sign up</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
            </details>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

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
      {/* <div className="navbar bg-gradient-to-r from-red-300 to-gray-700 ..."> */}

      <div className="navbar-start">
        <Link className="text-black" href="/">
          <Image
            src="/images/frame.svg"
            width="350"
            height="300"
            alt="memento logo"
            priority
          />
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
        <select
          className="select select-bordered join-item"
          defaultValue="option1"
        >
          <option value="option1">Travel</option>
          <option value="option2">Celebration</option>
          <option value="option3">Sport</option>
          <option value="option4">Nature</option>
          <option value="option5">Education</option>
          <option value="option6">DIY</option>
          <option value="option7">Tutorial</option>
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
                    <li className="text-white bg-primary rounded p-2">
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
                      <Link className="text-white" href="/signup">
                        Sign up
                      </Link>
                    </li>
                    <li>
                      {' '}
                      <Link className="text-white" href="/login">
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

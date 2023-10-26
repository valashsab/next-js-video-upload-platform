import '../globals.css';
// import Image from 'next/image';
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
    <header className="bg-black text-white rounded-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <ul>
          <li>
            <Link className="text-white" href="/">
              {/* <Link className="headerLinks" href="/"> */}
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

        <br />
        <br />
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                id="searchBar"
                name="searchBar"
                placeholder="Search"
              />
            </div>
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
        <div>
          {user ? (
            <>
              <div>
                {' '}
                {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
              </div>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link class="text-white" href="/signup">
                Sign up
              </Link>
              <Link class="text-white" href="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>

    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <Link className="text-white" href="/">
    //       Home
    //       <Image
    //         src="/images/loremipsumlogo.jpg"
    //         width="100"
    //         height="100"
    //         alt="logo"
    //         className="btn btn-ghost normal-case text-xl"
    //       />
    //     </Link>
    //   </div>

    //   <div className="navbar-center">
    //     <div className="form-control">
    //       <input
    //         placeholder="Search"
    //         className="input input-bordered w-24 md:w-auto"
    //       />
    //     </div>
    //   </div>

    //   <div className="navbar-end">
    //     <ul className="menu menu-horizontal px-1">
    //       <li>
    //         <a>Placeholder</a>
    //       </li>
    //       <li>
    //         <details>
    //           <summary>
    //             {' '}
    //             <Image
    //               src="/images/hamburger_navbar.png"
    //               width="50"
    //               height="50"
    //               alt="hamburger menu navbar"
    //             />
    //           </summary>
    //           <ul className="p-2 bg-base-100">
    //             <li>
    //               <Link href="/signup">Sign up</Link>
    //             </li>
    //             <li>
    //               <Link href="/login">Login</Link>
    //             </li>
    //           </ul>
    //         </details>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

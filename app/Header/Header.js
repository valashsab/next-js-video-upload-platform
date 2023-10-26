import '../globals.css';
import Image from 'next/image';

// import { cookies } from 'next/headers';
// import Link from 'next/link';
// import LogoutButton from '../api/(auth)/logout/LogoutButton';
// import { getUserBySessionToken } from '../database/users';

// export default async function Header() {
export default function Header() {
  // Task: Display the logged in user's username in the navigation bar and hide the login and register links depending on whether the user is logged in or not
  // 3. Make decision whether to show the login and register links or not

  // 1. Checking if the sessionToken cookie exists
  // const cookieStore = cookies();
  // const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  // const user =
  //   sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    // <header className="bg-black text-white rounded-lg">
    //   <nav
    //     className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    //     aria-label="Global"
    //   >
    //     <ul>
    //       <li>
    //         <Link className="text-white" href="/">
    //           {/* <Link className="headerLinks" href="/"> */}
    //           Home
    //         </Link>

    //         <br />
    //       </li>
    //       {/* <li>
    //         <Link href="/signup">Sign up</Link>
    //       </li>
    //       <li>
    //         <Link href="/login">Login</Link>
    //       </li>
    //       <li>
    //         <LogoutButton />
    //       </li> */}
    //     </ul>
    //     <br />
    //     <div>
    //       <form>
    //         <label
    //           className="text-white p-4"
    //           id="searchBar"
    //           name="searchBar"
    //           htmlFor="searchBar"
    //         >
    //           Search
    //         </label>
    //         <input className="text-white" id="searchBar" name="searchBar" />
    //       </form>
    //     </div>
    //     <br />
    //     <br />

    //     <div>
    //       {user ? (
    //         <>
    //           <div>{user.userName}</div>
    //           <LogoutButton />
    //         </>
    //       ) : (
    //         <>
    //           <Link class="text-white" href="/signup">
    //             Sign up
    //           </Link>
    //           <Link class="text-white" href="/login">
    //             Login
    //           </Link>
    //         </>
    //       )}
    //     </div>
    //   </nav>
    // </header>

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Image
          src="/logo/loremipsumlogo.jpg"
          width="100"
          height="50"
          alt="logo"
          className="btn btn-ghost normal-case text-xl"
        />
      </div>

      <div className="navbar-center">
        <div className="form-control">
          <input
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Placeholder name</a>
          </li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Sign up</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

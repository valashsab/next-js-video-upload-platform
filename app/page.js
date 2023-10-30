import { cookies } from 'next/headers';
import Link from 'next/link';
import { getUserBySessionToken } from './database/users';

export default async function DashboardPage() {
  // Task: Display the logged in user's username in the navigation bar and hide the login and register links depending on whether the user is logged in or not
  // 3. Make decision whether to show the login and register links or not

  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));
  return (
    // <h1>Make new memories and save them in your digital video album </h1>
    <div className="navbar bg-black min-h-screen flex flex-col items-center justify-center ">
      {/* // <div className="navbar bg-gradient-to-r from-red-300 to-gray-700 min-h-screen flex flex-col items-center justify-center "> */}
      <h1 className="text-3xl font-bold text-white mb-4">Slogan placeholder</h1>
      <div className="carousel relative max-w-md p-4 space-x-10 bg-neutral rounded-box mx-auto">
        <div
          id="item1"
          className="carousel-item w-full items-center justify-center"
        >
          <video className="rounded-box" width="620" height="540" controls>
            <source src="./videos/timelapse_london.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          id="item2"
          className="carousel-item w-full items-center justify-center"
        >
          <video className="rounded-box" width="620" height="540" controls>
            <source src="./videos/beach.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          id="item3"
          className="carousel-item w-full items-center justify-center"
        >
          <video className="rounded-box" width="620" height="540" controls>
            <source src="./videos/wedding.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          id="item4"
          className="carousel-item w-full items-center justify-center"
        >
          <video className="rounded-box" width="620" height="540" controls>
            <source src="./videos/women_dancing.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div className="p-2 bg-base-100">
        {user ? (
          <div className="text-center">
            <p>
              {' '}
              You are already logged in,{' '}
              {user.userName.charAt(0).toUpperCase() + user.userName.slice(1)}
            </p>
            <div>
              <Link href={`/dashboard/${user.userName}`}>
                <div>
                  <div className="mt-5">
                    <button className="flex w-full justify-center rounded-md btn-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Dashboard
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-4 justify-center">
            <Link href="/signup">
              <div>
                <button className="btn btn-secondary">Sign up</button>
              </div>
            </Link>
            <Link href="/login">
              <div>
                <button className="btn btn-primary">Login</button>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

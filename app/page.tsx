import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
// import { User } from '../migrations/00000-createTableUsers';
import { getUserBySessionToken } from './database/users';

export default async function DashboardPage() {
  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // 2. Get the current logged in user from the database using the sessionToken value
  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  return (
    <div className="bg-custom-bg w-full h-full">
      {/* hero */}
      <div className="hero min-h-screen relative">
        <Image
          src="/images/colorful-sunset.jpg"
          layout="fill"
          objectFit="cover"
          alt="memento logo"
          priority
          className="responsive"
          style={{ opacity: 0.7 }}
        />
        <div className="hero-overlay bg-custom-bg bg-opacity-50" />
        <div className="hero-content text-center text-black">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold">Relive your memories </h1>
            <h2 className="mb-5 text-2xl font-semibold">
              Videos kept as a reminder of unforgettable moments
            </h2>
          </div>
        </div>
      </div>
      {/* 2.segment: upload & rewatch */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left max-h-screen max-w-screen-xl mx-auto mt-8 mb-8">
            <h1 className="text-8xl font-bold text-white mb-4">
              Upload & Rewatch
            </h1>
            <p className="py-6 text-xl">
              Access to celebrations, travels, memorable events in form of
              visual media for you and everyone you want to share these with.
              Create your personal digital video album.
            </p>

            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
          <div className="col-span-1 p-8 mt-10">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/traffic_vietnam.mp4" type="video/mp4" />
              <track kind="captions" label="Traffic in Vietnam" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* Like & comment  */}

      <div className="hero min-h-screen bg-custom-bg">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center">
              <Image
                src="/images/woman-car.jpg"
                width={400}
                height={350}
                alt="memento logo"
                priority
                className="responsive mb-4 lg:mb-0 lg:mr-4"
              />
              <div className="flex flex-col">
                <textarea
                  placeholder="Leave a comment"
                  className="bg-info textarea textarea-bordered textarea-lg w-full max-w-xs mb-2 lg:mb-4 lg:mr-2 lg:mt-20 lg:ml-0.1"
                />
                {/* <button className="btn absolute top-60 right-30"> */}
                <button className="btn absolute mb-4 lg:mb-5 lg:mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Like
                </button>
              </div>
            </div>
          </div>

          <div className="text-left max-h-screen max-w-screen-xl mx-auto mt-8 mb-8 ">
            <h1 className="text-8xl text-black font-bold">Show appreciation</h1>
            <p className="py-6 text-black text-xl">
              Share your thoughts. Like the videos and leave comments.
            </p>
          </div>
        </div>
      </div>
      {/* carousel */}
      <div className="hero min-h-screen bg-base-200 flex flex-col items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md mb-8">
            <h1 className="text-8xl font-bold">
              Put together your own collection
            </h1>
          </div>
        </div>
        <div className="carousel carousel-center rounded-box">
          <div className="carousel-item">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/timelapse_london.mp4" type="video/mp4" />
              <track kind="captions" label="Timelapse from London city" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/beach.mp4" type="video/mp4" />
              <track kind="captions" label="timelapse from London city" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/wedding.mp4" type="video/mp4" />
              <track kind="captions" label="timelapse from London city" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/women_dancing.mp4" type="video/mp4" />
              <track kind="captions" label="timelapse from London city" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/traffic_vietnam.mp4" type="video/mp4" />
              <track kind="captions" label="timelapse from London city" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/waterfall.mp4" type="video/mp4" />
              <track kind="captions" label="timelapse from London city" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="rounded-box" width="620" height="540" controls>
              <source src="./videos/man_in_nature.mp4" type="video/mp4" />
              <track kind="captions" label="timelapse from London city" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* signup & login OR dashboard*/}
      <div className="hero min-h-screen bg-custom-bg">
        <div className="hero-content text-center rounded">
          <div className="max-w-md">
            <h1 className="text-8xl font-bold text-black">Let's get started</h1>
            <p className="py-6 text-black text-xl mt-4">
              Sign up to set up your account or login to upload your video.
            </p>
            <div className="w-full h-full items-center justify-center ">
              <div className="flex items-center justify-center p-2 text-black mb-8 mt-4">
                {user ? (
                  <div className="text-center text-xl">
                    <p>
                      {' '}
                      You are already logged in,{' '}
                      {user.userName.charAt(0).toUpperCase() +
                        user.userName.slice(1)}
                    </p>
                    <div>
                      <Link href={`/dashboard/${user.userName}`}>
                        <div>
                          <div className="mt-5">
                            <button className="justify-center rounded-md btn-primary px-4 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
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
            </div>{' '}
          </div>
        </div>
      </div>

      {/* statistics */}
      <div className="bg-base-200 flex justify-center items-center h-40">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="stat-title text-primary">Uploads</div>
            <div className="stat-value text-primary">31K</div>
            <div className="stat-desc text-primary">Jan 1st - Oct 31st </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <div className="stat-title text-primary">New Users</div>
            <div className="stat-value text-primary">4,200</div>
            <div className="stat-desc text-primary">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
            <div className="stat-title text-primary">New Sign-ups</div>
            <div className="stat-value text-primary">1,200</div>
            <div className="stat-desc text-primary">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

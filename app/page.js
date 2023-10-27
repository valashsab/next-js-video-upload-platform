// // import { Carousel } from 'react-responsive-carousel';

// export default function Home() {
//   return (
//     <div
//       className="navbar
//       bg-gradient-to-r
//       from-red-300
//       to-gray-700
//       min-h-screen"
//     >
//       {/* <section className={styles.videoContainer}>
//         <div className={styles.videoWrapper}>
//           <video width="320" height="240" controls>
//             <source src="./videos/timelapse_london.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>

//           <video width="320" height="240" controls>
//             <source src="./videos/beach.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <br />
//         <div className={styles.videoWrapper}>
//           <video width="320" height="240" controls>
//             <source src="./videos/wedding.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>

//           <video width="320" height="240" controls>
//             <source src="./videos/women_dancing.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <br />
//         <br />

//       </section> */}
//       {/* <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
//         <div className="carousel-item">
//           <video className="rounded-box" width="320" height="240" controls>
//             <source src="./videos/timelapse_london.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="carousel-item">
//           <video width="320" height="240" controls>
//             <source src="./videos/beach.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="carousel-item">
//           <video className="rounded-box" width="320" height="240" controls>
//             <source src="./videos/man_in_nature.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="carousel-item">
//           <video width="320" height="240" controls>
//             <source src="./videos/wedding.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="carousel-item">
//           <video width="320" height="240" controls>
//             <source src="./videos/women_dancing.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         <div className="carousel-item">
//           <video className="rounded-box" width="320" height="240" controls>
//             <source src="./videos/waterfall.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="carousel-item">
//           <video className="rounded-box" width="320" height="240" controls>
//             <source src="./videos/traffic_vietnam.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//       <div className="flex flex-row gap-4 ">
//         <Link href="/signup">
//           <div>
//             <button className="btn btn-secondary">Sign up</button>
//           </div>
//         </Link>
//         <Link href="/login">
//           <div>
//             <button className="btn btn-primary">Login</button>
//           </div>
//         </Link>
//     </div> */}
//       <div
//         className="carousel w-full bg-gradient-to-r
//       from-red-300
//       to-gray-700
//       min-h-screen"
//       >   <div className="w-full">
//       <div className="carousel relative max-w-md p-4 space-x-4 bg-neutral rounded-box mx-auto">
//         <div id="item1" className="carousel-item w-full">
//           <video className="rounded-box" width="320" height="240" controls>
//             <source src="./videos/timelapse_london.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>{' '}
//         </div>
//         <div id="item2" className="carousel-item w-full">
//           <video width="320" height="240" controls>
//             <source src="./videos/beach.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>{' '}
//         </div>
//         <div id="item3" className="carousel-item w-full">
//           <video width="320" height="240" controls>
//             <source src="./videos/wedding.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>{' '}
//         </div>
//         <div id="item4" className="carousel-item w-full">
//           <video width="320" height="240" controls>
//             <source src="./videos/women_dancing.mp4" type="video/mp4" />
//             <track kind="captions" label="timelapse from London city" />
//             Your browser does not support the video tag.
//           </video>{' '}
//         </div>
//       </div>
//       <div className="flex justify-center ">
//         <a href="#item1" className="btn btn-xs">
//           1
//         </a>
//         <a href="#item2" className="btn btn-xs">
//           2
//         </a>
//         <a href="#item3" className="btn btn-xs">
//           3
//         </a>
//         <a href="#item4" className="btn btn-xs">
//           4
//         </a>
//       </div>
//     </div><div className="flex flex-row gap-4 justify-center">
//         <Link href="/signup">
//           <div>
//             <button className="btn btn-secondary">Sign up</button>
//           </div>
//         </Link>
//         <Link href="/login">
//           <div>
//             <button className="btn btn-primary">Login</button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';

export default function Home() {
  return (
    <div className="navbar bg-gradient-to-r from-red-300 to-gray-700 min-h-screen">
      <div className="carousel relative max-w-md p-4 space-x-4 bg-neutral rounded-box mx-auto">
        <div id="item1" className="carousel-item w-full">
          <video className="rounded-box" width="320" height="240" controls>
            <source src="./videos/timelapse_london.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="item2" className="carousel-item w-full">
          <video width="320" height="240" controls>
            <source src="./videos/beach.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="item3" className="carousel-item w-full">
          <video width="320" height="240" controls>
            <source src="./videos/wedding.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="item4" className="carousel-item w-full">
          <video width="320" height="240" controls>
            <source src="./videos/women_dancing.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex justify-center">
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
    </div>
  );
}

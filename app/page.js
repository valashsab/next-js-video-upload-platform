// import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <section className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <video width="320" height="240" controls className={styles.video}>
            <source src="./videos/timelapse_london.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>

          <video width="320" height="240" controls className={styles.video}>
            <source src="./videos/beach.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br />
        <div className={styles.videoWrapper}>
          <video width="320" height="240" controls className={styles.video}>
            <source src="./videos/wedding.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>

          <video width="320" height="240" controls className={styles.video}>
            <source src="./videos/women_dancing.mp4" type="video/mp4" />
            <track kind="captions" label="timelapse from London city" />
            Your browser does not support the video tag.
          </video>
        </div>
        <br />
        <br />
        <div className="flex flex-row gap-4 ">
          <Link href="/signup">
            <div>
              <button className="btn btn-primary">Sign up</button>
            </div>
          </Link>
          <Link href="/login">
            <div>
              <button className="btn btn-secondary">Login</button>
            </div>
          </Link>
        </div>
      </section>
    </main>
    // <div className="carousel rounded-box">
    //   <Carousel>
    //     <div className="carousel-item">
    //       <video width="320" height="240" controls>
    //         <source src="./videos/timelapse_london.mp4" type="video/mp4" />
    //         <track kind="captions" label="timelapse from London city" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //     <div className="carousel-item">
    //       <video width="320" height="240" controls>
    //         <source src="./videos/beach.mp4" type="video/mp4" />
    //         <track kind="captions" label="timelapse from London city" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //     <div className="carousel-item">
    //       <video width="320" height="240" controls>
    //         <source src="./videos/wedding.mp4" type="video/mp4" />
    //         <track kind="captions" label="timelapse from London city" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //     <div className="carousel-item">
    //       <video width="320" height="240" controls>
    //         <source src="./videos/women_dancing.mp4" type="video/mp4" />
    //         <track kind="captions" label="timelapse from London city" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //   </Carousel>
    // </div>
  );
}

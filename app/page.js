// import Image from 'next/image';
import Header from './Header/Header';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Header />
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
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Sign up</button>
          <button className={styles.button}>Login</button>
        </div>
      </section>
    </main>
  );
}

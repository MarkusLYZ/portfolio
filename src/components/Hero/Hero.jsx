import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yunzhi</h1>
        <p className={styles.description}>
          I am a full-stack mobile developer with 1 year of experience. Reach
          out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:yunzhi.li203@gmail.com">
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;

import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutHero.png")}
          alt="Me sitting with a latop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Corsor Icon" />
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
                I'm a fullstack developer that graduated in SIT and specialise
                in mobile application development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Corsor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have experience with building Flutter and React Native
                applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Development</h3>
              <p>
                I have experience using Python and MySQL to build backend
                systems with functional database, as well as tool and frameworks
                such as AWS EC2, Clerk, Expo and Firebase to aid the development
                process.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

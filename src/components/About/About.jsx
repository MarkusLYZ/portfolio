import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage}
          src={getImageUrl("about/aboutHero.png")}
          alt="Me sitting with a latop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Corsor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a fullstack developer with experience in flutter mobile
                development and RESTful APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Corsor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a fullstack developer with experience in flutter mobile
                development and RESTful APIs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a fullstack developer with experience in flutter mobile
                development and RESTful APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

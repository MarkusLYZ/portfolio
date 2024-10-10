import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p>+65 92427987</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:yunzhi.li203@gmail.com">yunzhi.li203@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkinIcon Icon"
          />
          <a href="https://www.linkedin.com/in/yunzhi-li230">
            linkedin.com/yunzhi-li
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://www.github.com/MarkusLYZ">github.com/MarkusLYZ</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

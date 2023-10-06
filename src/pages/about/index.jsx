import React from "react";

import styles from "./styles.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      {/* Welcome Text */}
      <div className={styles.welcomeText}>
        <h1 className={styles.header}>About</h1>
        <p className={styles.text}>
          Autoblog is an AI powered assistant which utilizes ChatGPT and the
          Nylas Calender and Email API to bring to its users well curated
          articles in the area of software development.
        </p>
        <p className={styles.text}>
          Autoblog bot,the autoblog AI writes tech articles within minutes
          notifies subscribers by email when a new article is released.
        </p>

        <p className={styles.text}>
          To find out more about the power of Autoblog, subscribe to the
          newsletter.
        </p>
      </div>
    </div>
  );
};

export default About;

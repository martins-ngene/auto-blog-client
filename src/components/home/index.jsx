import React from "react";

import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Welcome Text */}
      <div className={styles.welcomeText}>
        <h1 className={styles.header}>AutoBlog</h1>
        <p className={styles.text}>
          An AI assistant that brings you the best articles to learn any
          technology in the area software development.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

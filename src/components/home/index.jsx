import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles.position_image}>
        <div className={styles.image_container}>
          <Image
            src='/images/home.svg'
            fill='fill'
            alt='Home Page Background Image'
          />
        </div>
      </div>
      {/* Welcome Text */}
      <div className={styles.welcomeText}>
        <h1 className={styles.header}>Welcome to the Future of Landings</h1>
        <p className={styles.text}>
          Create screens right in your Figma. Connect different blocks and
          create awesome landings. Yes, it just takes a few minutes!
        </p>
      </div>
    </div>
  );
};

export default HomePage;

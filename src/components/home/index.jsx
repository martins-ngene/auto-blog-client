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
        <h1 className={styles.header}>
          AutoBlog, Your Start To Cruising The Digital Highway
        </h1>
        <p className={styles.text}>
          Step into the captivating realm of software development with us, where
          we navigate the digital frontier together, leading you with impactful
          learning and insights.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

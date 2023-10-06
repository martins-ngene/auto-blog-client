import React from "react";
import Image from "next/image";
import { SiProbot } from "react-icons/si";

import styles from "./styles.module.css";

const Banner = ({ src, title, date }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          src={src}
          alt='Banner'
          fill='fill'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </div>
      <div className={styles.header}>
        <div className={styles.metadata_container}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.date_and_author_container}>
            <h2 className={styles.author}>
              <em>Written by: AutoBlog Bot</em> <SiProbot />
            </h2>
            <h2 className={styles.date}>{date}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

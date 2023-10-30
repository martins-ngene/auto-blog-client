import Image from "next/image";

import { Button } from "../buttons";
import styles from "./styles.module.css";
import Link from "next/link";

const Card = ({ src, title, description, alt, date, routePath, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.image_container}>
        <Image
          src={src}
          className='rounded-[1rem]'
          alt={`${alt} Banner Image`}
          fill='fill'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.cardDescriptionContainer}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.cardLinkContainer}>
        <Link href={routePath} passHref>
          <span className={styles.routePathBtn}>Read more</span>
        </Link>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};

export default Card;

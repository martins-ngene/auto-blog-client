import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import { Links } from "../constants/NavBar.Schema";
import Menu from "../menu";
import styles from "./styles.module.css";
import Image from "next/image";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <Link href='/'>AutoBlog</Link>
      </div>
      {/* Nav Links Container */}
      <ul className={styles.nav_links_container}>
        {Links.map((item, index) => {
          return (
            <Link key={index} href={item.route}>
              <button className={styles.nav_link}>
                {item.link.toUpperCase()}
              </button>
            </Link>
          );
        })}
      </ul>
      <Link href='/articles' passHref>
        <div className={styles.article_btn_container}>
          <Image
            src='/article_btn.svg'
            alt='Search Articles Icon'
            fill='fill'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />
        </div>
      </Link>
      {/* Open Menu Button */}
      <div className='block md:hidden'>
        <button
          className={styles.menu_open_button}
          onClick={() => setMenuState(true)}>
          <BiMenu />
        </button>
      </div>
      {/* Menu */}
      {menuState && <Menu ctrlMenu={() => setMenuState(false)} />}
    </div>
  );
};

export default NavBar;

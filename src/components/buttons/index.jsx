import React from "react";
import { GrLinkTop } from "react-icons/gr";

import styles from "./styles.module.css";

//Button
export const Button = props => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={
        props.fill === "fill"
          ? styles.filled
          : props.fill === "full"
          ? styles.full
          : props.fill === "disabled"
          ? styles.disabled
          : styles.outlined
      }
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// Scroll To Top Button
export const ScrollToTopBtn = props => {
  return (
    <button
      className={`glass-bg ${styles.scrollToTop}`}
      onClick={props.onClick}>
      <GrLinkTop />
    </button>
  );
};

import React from "react";

import styles from "./styles.module.css";

const MDXComponents = {
  h1: props => <h1 className={styles.h1} {...props} />,
  p: props => <p className={styles.p} {...props} />,
  pre: props => <pre className={styles.pre} {...props} />,
  code: props => <code className={styles.code} {...props} />,
};

export default MDXComponents;

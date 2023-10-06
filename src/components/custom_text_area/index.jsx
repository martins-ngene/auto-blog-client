import React from "react";
import styles from "./styles.module.css";

const TextArea = ({
  htmlFor,
  label,
  id,
  placeHolder,
  onChange,
  value,
  name,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor} className={styles.textLabel}>
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        id={id}
        placeholder={placeHolder}
        onChange={onChange}
        className={styles.textArea}></textarea>
    </div>
  );
};

export default TextArea;

import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type, value }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} value={value} />
    </div>
  );
};

export default Input;

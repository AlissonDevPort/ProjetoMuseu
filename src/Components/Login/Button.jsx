import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <div>
      <Link to="/">
        <button {...props} className={styles.button}>
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;

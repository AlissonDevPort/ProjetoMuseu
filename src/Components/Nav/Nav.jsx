import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>
        {" "}
        <a href="/">MentorApp</a>{" "}
      </h1>
      <ul className={styles.navitem}>
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alisson-portela-686078232/">
            Contato
          </a>
        </li>
        <li>
          <a href="/login"> Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

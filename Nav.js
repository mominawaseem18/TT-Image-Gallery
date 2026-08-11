import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1>TT-Gallery</h1>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Discover</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;

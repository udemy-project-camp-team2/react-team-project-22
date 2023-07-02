import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_center}>
        <Link to="/">
          <h1>The Movie List</h1>
        </Link>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mylist">My List</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

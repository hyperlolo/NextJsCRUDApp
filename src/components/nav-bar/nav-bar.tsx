import Link from "next/link";
import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link
      href="/"
      className={`${styles.navbarLink} text-primary text-xl hover:text-gold-500 no-underline`}
    >
      NextJs CRUD APP
    </Link>
    <div className="flex gap-4">
      <Link href="/about" className={styles.navbarLink}>
        About
      </Link>
      <Link href="/contact" className={styles.navbarLink}>
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;

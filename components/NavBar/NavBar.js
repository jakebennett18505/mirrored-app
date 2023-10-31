import styles from './NavBar.module.css'
import React from 'react'
import Link from 'next/link';

const NavBar = () => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.logo} src="public/vercel.svg" alt="logo" /> */}
            <div className={styles.logo}></div>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/">Home</Link></li>
                <li className={styles.navItem}><Link href="/about">About</Link></li>
                <li className={styles.navItem}><Link href="/pricing">Pricing</Link></li>
            </ul>
        </div>
    );
  };

export default NavBar;
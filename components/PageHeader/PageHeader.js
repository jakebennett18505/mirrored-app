import React from 'react'
import 'app/globals.css'
import styles from '/sass/main.scss'

const PageHeader = ({ pathname }) => {
  return (
    <div className="main">
      <div className={styles.card}><h1>This is the {pathname} page using next.js</h1></div>
    </div>
  );
};

export default PageHeader;

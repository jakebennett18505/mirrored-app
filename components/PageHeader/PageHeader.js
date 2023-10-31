import React from 'react'
import styles from './PageHeader.module.css';

const PageHeader = ({ pathname }) => {
  return (
    <div className={styles.main}>
        <h1>This is the {pathname} page using next.js</h1>
    </div>
  );
};

export default PageHeader;

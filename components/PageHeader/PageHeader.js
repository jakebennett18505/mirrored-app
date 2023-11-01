import React from 'react'
import 'app/globals.css'

const PageHeader = ({ pathname }) => {
  return (
    <div className="main">
        <h1>This is the {pathname} page using next.js</h1>
    </div>
  );
};

export default PageHeader;

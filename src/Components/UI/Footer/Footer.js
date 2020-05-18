import React from 'react';
import classes from './Footer.module.css';

const footer = () => (
    <div className={classes.Footer}>
        <p>Site Built Using ReactJS</p>
        <p><a href="https://github.com/AZForest/PortfolioSite" target="_blank" rel="noopener noreferrer">VIEW CODE</a></p>
    </div>
)

export default footer;
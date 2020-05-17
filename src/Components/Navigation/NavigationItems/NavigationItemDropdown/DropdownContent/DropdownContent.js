import React from 'react';
import classes from './DropdownContent.module.css';
import { NavLink } from 'react-router-dom';

const dropdownContent = (props) => (
    <div className={classes.DropdownContent} onClick={props.click}>
        <NavLink to="/PortfolioSite/ecommerce">E-Commerce Site</NavLink>
        <NavLink to="/PortfolioSite/winerylandingpage">Winery Landing Page</NavLink>
        <NavLink to="/PortfolioSite/weatherfinder">Weather Finder</NavLink>
    </div>
)

export default dropdownContent;
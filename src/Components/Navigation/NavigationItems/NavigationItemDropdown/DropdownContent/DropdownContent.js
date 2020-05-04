import React from 'react';
import classes from './DropdownContent.module.css';
import { NavLink } from 'react-router-dom';

const dropdownContent = (props) => (
    <div className={classes.DropdownContent} onClick={props.click}>
        <NavLink to="/ecommerce">E-Commerce App</NavLink>
        <NavLink to="/winerylandingpage">Winery Landing Page</NavLink>
        <NavLink to="/weatherfinder">Weather Finder</NavLink>
    </div>
)

export default dropdownContent;
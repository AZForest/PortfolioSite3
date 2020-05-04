import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Navbar.module.css';

const navbar = (props) => (
    <header className={classes.Navbar}>
        <p>ALEX FOREST</p>
        <nav>
            <NavigationItems />
        </nav> 
    </header>
)

export default navbar;
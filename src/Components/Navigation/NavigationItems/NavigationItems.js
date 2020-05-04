import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import NavItemDropdown from './NavigationItemDropdown/NavItemDropdown';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact >HOME</NavigationItem>
        <NavItemDropdown />
        <NavigationItem link="/about">ABOUT</NavigationItem>
        <NavigationItem link="/resume">RESUME</NavigationItem>
        <NavigationItem link="/contact">CONTACT</NavigationItem>
    </ul>
)

export default navigationItems;
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import NavItemDropdown from './NavigationItemDropdown/NavItemDropdown';
import classes from './NavigationItems.module.css';

class navigationItems extends React.Component {
    state = {
        isVisible: true
    }
    
    isVisibleHandler() {
        let current = this.state.isVisible;
        this.setState({ isVisible: !current })
    }

    render() {
        let x;
        if (this.state.isVisible) {
            x = 'visible';
        } else {
            x = 'hidden';
        }
        let ulStyle = {
            color: 'blue',
            visibility: x
        }

        return (
            <React.Fragment>
                <ul className={classes.NavigationItems} style={ulStyle}>
                            <NavigationItem link="/PortfolioSite" exact >HOME</NavigationItem>
                            <NavItemDropdown />
                            <NavigationItem link="/PortfolioSite/about">ABOUT</NavigationItem>
                            <NavigationItem link="/PortfolioSite/resume">RESUME</NavigationItem>
                            <NavigationItem link="/PortfolioSite/contact">CONTACT</NavigationItem>
                        </ul>
                <div className={classes.BurgerMenu} onClick={this.isVisibleHandler.bind(this)}><i className="fa fa-bars fa-2x"></i></div>
            </React.Fragment>
        )
    }
}

export default navigationItems;
import React from 'react';
import classes from './NavItemDropdown.module.css';
import DropdownContent from './DropdownContent/DropdownContent';
import caret from '../../../../assets/images/logo192.png';

class NavItemDropwdown extends React.Component {
    state = {
        isVisible: false
    }

    toggleHidden() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    
    render() {
        let dropdown;
        if (this.state.isVisible) {
            dropdown = <DropdownContent click={this.toggleHidden.bind(this)}/>;
        } else {
            dropdown = '';
        }

        return (
            <div className={classes.NavItemDropdown}>
                <button onClick={this.toggleHidden.bind(this)}>
                    PROJECTS
                    <i href={caret} alt="caret"></i>
                </button>
                {dropdown}
            </div>
        )
    }
}

export default NavItemDropwdown;
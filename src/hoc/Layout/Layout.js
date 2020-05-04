import React from 'react';
import Navbar from '../../Components/Navigation/Navbar/Navbar';
import Footer from '../../Components/UI/Footer/Footer';
import classes from './Layout.module.css';


class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;
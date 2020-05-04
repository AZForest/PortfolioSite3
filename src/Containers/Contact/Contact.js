import React from 'react';
import classes from './Contact.module.css';

class Contact extends React.Component {
    render() {
        return (
            <div className={classes.Contact}>
                <div className={classes.Content}>
                    <h1>Contact <span>Me</span></h1>
                    <div className={classes.Bar}></div>
                    <div className={classes.Content2}>
                        <p>Listed below are the methods you can contact me by.</p>
                        <div className={classes.ContactMethods}>
                            <p>Email: azforest44@gmail.com</p>
                            <p>Phone: (916) 412-1799</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact;
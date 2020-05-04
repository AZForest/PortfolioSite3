import React from 'react';
import classes from './About.module.css';
import image from '../../assets/images/redwoods2.jpg'

class About extends React.Component {
    render() {
        return (
            <div className={classes.About}>
                <div className={classes.Content}>
                    <h1>About <span>Me</span></h1>
                    <div className={classes.Row}>
                        <div className={classes.Image}>
                            <img src={image} alt="redwood"/>
                        </div>
                        <div className={classes.Bio}>
                            <h3>Bio</h3>
                            <p>My name is Alex Forest and I'm a primarily self-taught developer based in Long Beach, USA. My focus and interests include both front-end development and full-stack development. Some of my skills included in this portfolio include ASP.NET, C#, Bootstrap, JavaScript, CSS, and ReactJS. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
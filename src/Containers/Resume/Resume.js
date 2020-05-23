import React from 'react';
import classes from './Resume.module.css';
import resume from '../../assets/images/AlexForestResume.pdf';

class Resume extends React.Component {
    render() {
        return (
            <div className={classes.Resume}>
                
                <div className={classes.Content}>
                <h1>RESUME</h1>
                    <div className={classes.ResumeContainer}>
                        <img src={resume} alt="resume" />
                    </div> 
                    <a href={resume} download>DOWNLOAD PDF</a>
                </div>
            </div>
        )
    }
}

export default Resume;
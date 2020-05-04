import React from 'react';
import classes from './Project.module.css';
//import Pic from '../../../assets/images/logo192.png';

const project = (props) => (
    <div className={classes.Project} onClick={props.click}>
        <p>{props.title}</p>
        <img src={props.pic} alt="pic"/>
        {/*<div className={classes.bar}></div>*/}
        <p>{props.desc}</p>
        {/*<ul>
            <li>{props.skill1}</li>
            <li>{props.skill2}</li>
            <li>{props.skill3}</li>
            <li>{props.skill4}</li>
        </ul>*/}
    </div>
)

export default project;
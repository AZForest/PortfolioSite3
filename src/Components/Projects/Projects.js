import React from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';

const projects = (props) => (
    <div className={classes.Projects}>
        <Project title="E-Commerce Site" desc="ASP.NET C# Bootstrap CSS" click={props.projectClick}/>
        <Project title="Winery Landing Page" desc="CSS Grid, Flexbox, Media Queries"/>
        <Project title="Weather Finder" desc="Vanilla JavaScript, AJAX"/>
    </div>
)

export default projects;
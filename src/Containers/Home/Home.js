import React from 'react';
import classes from './Home.module.css';
//import Projects from '../../Components/Projects/Projects';
import Project from '../../Components/Projects/Project/Project';
import picOne from '../../assets/images/c#logo2.png';
import wineryPic from '../../assets/images/css.png';
import weatherPic from '../../assets/images/jslogo.png';

class Home extends React.Component {

    ecommerceClickHandler = () => {
        this.props.history.push('/PortfolioSite/ecommerce');
    }
    wineryClickHandler = () => {
        this.props.history.push('/PortfolioSite/winerylandingpage');
    }
    weatherClickHandler = () => {
        //console.log(this.props);
        this.props.history.push('/PortfolioSite/weatherfinder');
    }
    resumeClickHandler = () => {
        this.props.history.push('PortfolioSite/resume');
    }
    
    render() {
        //let attachedClasses = [classes.Home, classes.overlay];

        return (

            <div className={classes.Home}>
                <div className={classes.overlay}>
                    <h1>Alex Forest</h1>
                    <h4>Software Developer</h4>
                    <div className={classes.ProjectDiv}>
                        <h4>PROJECTS</h4>
                        {/*<Projects projectClick={this.projectClickHandler}/>*/}
                        <div>
                            <Project title="E-Commerce Site" desc="C#, ASP.NET, SQL, Bootstrap, CSS" click={this.ecommerceClickHandler} pic={picOne} skill1="C#" skill2="ASP.NET" skill3="Bootstrap" skill4="CSS"/>
                            <Project title="Winery Landing Page" desc="CSS Grid, Flexbox, Media Queries" click={this.wineryClickHandler} pic={wineryPic} skill1="CSS Grid" skill2="CSS Flexbox" skill3="Media Queries"/>
                            <Project title="Weather Finder" desc="JavaScript, AJAX, CSS" click={this.weatherClickHandler} pic={weatherPic} skill1="JavaScript" skill2="AJAX" skill3="CSS"/>
                        </div>
                        
                        <button onClick={this.resumeClickHandler}>RESUME</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;
import React from 'react';
import classes from '../Ecommerce/Ecommerce.module.css';
import image from '../../../assets/images/WeatherFinder.png';
import weatherDemo from '../../../assets/videos/WeatherFinder.mov';
import Modal from '../../../Components/UI/Modal/Modal';

class WeatherFinder extends React.Component {
    state = {
        modalOpen: false
    }

    toggleModalHandler() {
        this.setState({modalOpen: !this.state.modalOpen})
    }

    render() {
        let modal;
        if (this.state.modalOpen) {
            modal = <Modal name="Weather Finder" desc="JavaScript, AJAX, HTML, CSS" click={this.toggleModalHandler.bind(this)} livelink="https://azforest.github.io/WeatherFinder/" codelink="https://github.com/AZForest/WeatherFinder" demo={weatherDemo}/>
        } else {
            modal = "";
        }

        return (
            <React.Fragment>
                {modal}
                <div className={classes.Main}>
                    <h1>Weather Finder</h1>
                    <div className={classes.Content}>
                        <div className={classes.TopRow}>
                            <img src={image} alt="pic"/>
                            <div className={classes.Skills}>
                                <p>SKILLS USED: </p>
                                <div></div>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>AJAX</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.Bar}></div>
                        <div className={classes.Desc}>
                            <p>This app allows users to find the current weather data for any city in the world, via search bar. The city typed in by the user then displays on an image of the world, converting the latitude and longitude of the city to pixels. The map also allows users to click on any of the default cities loaded on the map and randomly select any city in the world.</p>
                            <p>This app uses vanilla JavaScript and AJAX to render the weather data, the map, and connect to the DarkSky.net API. The app also uses imported SkyCons animations to display the current weather of any city.</p>
                        </div>
                        <button onClick={this.toggleModalHandler.bind(this)}>DEMO</button>
                        <a href="https://azforest.github.io/WeatherFinder">LIVE VERSION</a>
                        <a href="https://github.com/AZForest/WeatherFinder">VIEW CODE</a>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default WeatherFinder;
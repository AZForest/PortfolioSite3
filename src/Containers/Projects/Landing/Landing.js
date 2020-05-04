import React from 'react';
import classes from '../Ecommerce/Ecommerce.module.css';
import image from '../../../assets/images/LandingPage.png';
import Modal from '../../../Components/UI/Modal/Modal';
import wineDemo from '../../../assets/images/giphy.gif';

class Landing extends React.Component {
    state = {
        modalOpen: false
    }

    toggleModalHandler() {
        this.setState({modalOpen: !this.state.modalOpen})
    }

    render() {
        let modal;
        if (this.state.modalOpen) {
            modal = <Modal name="Winery Landing Page" desc="HTML, CSS Grids, CSS Flexbox, Media Queries" click={this.toggleModalHandler.bind(this)} livelink="https://azforest.github.io/WineryLandingPage/" codelink="https://github.com/AZForest/WineryLandingPage/" demo={wineDemo}/>
        } else {
            modal = "";
        }

        return (
            <React.Fragment>
                {modal}
                <div className={classes.Main}>
                    <h1>Winery Landing Page</h1>
                    <div className={classes.Content}>
                        <div className={classes.TopRow}>
                            <img src={image} alt="pic"/>
                            <div className={classes.Skills}>
                                <p>SKILLS USED: </p>
                                <div></div>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS Grids</li>
                                    <li>CSS Flexbox</li>
                                    <li>Media Queries</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.Bar}></div>
                        <p>This app renders a non-interactive business landing page, focusing on front-end styling. For this app I created a fictional winery to accomplish this. This app displays all necessary business information needed for consumers, such as location info, prices, information about the company, event information, and other miscellaneous pertinent information. In addition to being an informative source for consumers, the page is designed to create an aschetically pleasing and intriguing experience for visiters to the site. Skills used in this site were HTML, CSS grids, flexbox, media queries, etc.</p>
                        <button onClick={this.toggleModalHandler.bind(this)}>DEMO</button>
                        <a href="https://azforest.github.io/WineryLandingPage/">LIVE VERSION</a>
                        <a href="https://github.com/AZForest/WineryLandingPage">VIEW CODE</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Landing;
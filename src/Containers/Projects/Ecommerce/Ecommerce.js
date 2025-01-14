import React from 'react';
import classes from './Ecommerce.module.css';
import image from '../../../assets/images/ecommerce3.JPG';
import Modal from '../../../Components/UI/Modal/Modal';
import ecommerceDemo from '../../../assets/videos/Store4.mp4';

class Ecommerce extends React.Component {
    state = {
        modalOpen: false
    }

    toggleModalHandler() {
        this.setState({modalOpen: !this.state.modalOpen})
    }


    render() {
        let modal;
        if (this.state.modalOpen) {
            modal = <Modal name="E-Commerce Site" desc="C#, ASP.Net MVC, HTML/CSS, Bootstrap, SQL" click={this.toggleModalHandler.bind(this)} livelink="https://storewebui20200430081038.azurewebsites.net" codelink="https://github.com/AZForest/E-CommerceSite" demo={ecommerceDemo}/>
        } else {
            modal = "";
        }

        return (
            <React.Fragment>
                {modal}
                <div className={classes.Main}>
                    <h1>E-Commerce Site</h1>
                    <div className={classes.Content}>
                        <div className={classes.TopRow}>
                            <img src={image} alt="pic"/>
                            <div className={classes.Skills}>
                                <p>SKILLS USED: </p>
                                <div></div>
                                <ul>
                                    <li>C#</li>
                                    <li>ASP.NET MVC</li>
                                    <li>HTML/CSS</li>
                                    <li>Bootstrap</li>
                                    <li>SQL Server</li>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.Bar}></div>
                        <div className={classes.Desc}>
                            <p>This app emulates a real-world E-commerce site. Several different languages were used in the creation of this app: C# for logic and back-end work, SQL for database management, and HTML, CSS, and BootStrap for front-end presentation. This app also uses ASP.NET and the Model-View-Controller (MVC) architecture to create a full-stack application. </p>
                            <p>The app allows users to create their own account, browse/select products from a database of over 20 items, modify their shopping cart, set up billing information, purchase orders, check completed orders, and modify their account information.</p>
                        </div>
                        <button onClick={this.toggleModalHandler.bind(this)}>DEMO</button>
                        <a href="https://storewebui20200430081038.azurewebsites.net" target="_blank" rel="noopener noreferrer">LIVE VERSION</a>
                        <a href="https://github.com/AZForest/E-CommerceSite" target="_blank" rel="noopener noreferrer">VIEW CODE</a>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Ecommerce;
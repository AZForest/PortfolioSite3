import React from 'react';
import classes from './Modal.module.css';
//import image from '../../../assets/images/winter2.jpg';

class Modal extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={classes.BackDrop} onClick={this.props.click}>
                </div>
                <div className={classes.Modal}>
                    <video autoPlay loop>
                        <source src={this.props.demo} alt="pic"/>
                    </video> 
                    <div>
                        <p className={classes.X} onClick={this.props.click}>x</p>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.desc}</p>
                        <a href={this.props.livelink} target="_blank" rel="noopener noreferrer">LIVE VERSION</a>
                        <a href={this.props.codelink} target="_blank" rel="noopener noreferrer">VIEW CODE</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Modal;
import React from 'react';
import { Link } from 'react-router-dom';
function banner(props){

    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
        <br></br>
         <h1 className="header center white-text"><strong>Plaza Primavera's</strong></h1>
        <div className="row center">
        <h5 className="header col s12 white-text">El lugar más completo para tus necesidades y gustos.</h5>
        </div>
        <div className="row center">
        <Link to="/aboutUs" id="download-button" className="btn-large waves-effect deep-orange darken-2">Conócenos</Link>
        </div>
        <br></br>
        </div>
        </div>
    )
}

export default banner;
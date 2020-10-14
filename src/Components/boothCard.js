import React from 'react';
import './styles/boothCard.css';
import {Link} from 'react-router-dom';

function BoothCard(props){

   const  {numLocal,face_profile,name}= props.booth

    return (
    <div className="col s12 m3 l3 booth__card">
        <div className="card">
            <div className="card-image ">
                <img src={`http://graph.facebook.com/${face_profile}/picture?width=500&height=500`}/> 
                <span className="card-title booth__title">{`Local ${numLocal}`}</span>
            </div>
            <div className="card-content booth__content">
                <p className=" grey-text text-darken-1"> {name} </p>
            </div>
            <div className="card-action center">
                <Link to={`store/${numLocal}`}>Conocer más</Link>
            </div>
        </div>
    </div>
    )
}

export default BoothCard;
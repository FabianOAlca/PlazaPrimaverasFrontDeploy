import React from 'react'
import Map from '../Components/map';
import Galery from '../Components/galery';
import './styles/aboutUs.css';
import {Link} from 'react-router-dom';

const credential= process.env.REACT_APP_GOOGLE_CREDENTIAL;

function AboutUs(props) {
    return(
        <div className="container">
            <div className="seccion">
                <div className="row">
                    <h3 className="header left grey-text"><strong>Conocenos</strong></h3>  
                </div>
                <div className="row s12">
                    <div className="col l4 s4 aboutUs__logo">
                        <img id="detail-banner" src="./images/plazaPrimaveras.jpg"/> 
                    </div>
                    <div className="col l8 s8 aboutUs__map">
                        <Map
                            googleMapURL= {`https://maps.googleapis.com/maps/api/js?v3.exp&key=${credential}`}
                            containerElement = {<div style={{height: '300px'}}/>}
                            mapElement ={<div style={{height: '100%'}} />}
                            loadingElement = {<p>Cargando</p>}
                        />
                    </div>
                </div>
                <div className="row s12">
                    <div className="col l4 s4 aboutUs__datos">
                        <h5 className="grey-text text-darken-2"><strong>Datos:</strong></h5>
                        <p className="grey-text aboutUs__datos"><strong>Teléfono: 312 320 2404 </strong></p>
                        <p className="grey-text aboutUs__datos"><strong> Correo: faosba@hotmail.com</strong></p>
                        <div class="row">
                            <div className="col l1 s3">
                                <a href="https://www.facebook.com/plazaprimaveras">
                                    <img id="fb-icon" src="https://image.flaticon.com/icons/svg/1384/1384005.svg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col l8 s8 aboutUs_container_description">
                        <p className="aboutUs__description ">Plaza Primavera's es parte de Villa de Álvarez desde hace 8 años, 
                        fundada en 2012, nuestro objetivo siempre ha sido ofrecer una amplia y diversa gama de productos 
                        a nuestros clientes, así como espacios óptimos para todos nuestros locatarios.
                        <br></br>Si quieres saber que locales tenemos en <strong>Renta </strong>
                         entra <Link to="/directory"><strong>aqui</strong></Link> en apartado de <strong>disponibles</strong></p>
                    </div>                    
                </div> 
                <div className="row">
                    <Galery/>
                </div>
            </div>
        </div>

    )
}

export default AboutUs;
import React from 'react';
import {Link} from 'react-router-dom';

function Contact(props) {
 return (
    <div className="container">
        <h3 class="header left grey-text"><strong>Contacto</strong></h3>
        <div class="row">
            <div class="col l3 s12 pink darken-4">
                <h5 class="pink-text text-lighten-3"><strong>¿Quieres conocer más sobre nosotros?</strong></h5>
                <p class="white-text"><strong>D.</strong>  Av. Federico Cárdenas Barajas 158, 28978, Villa de Álvarez, Col.</p>
                <p class="white-text"><strong>T.</strong>  312 320 2404</p>
                <p class="white-text"><strong>C.</strong>  </p>
            </div>
            <div class="col l9 s12 pink lighten-5">
            <br></br>
                <div class="row">
                    <div class="input-field col s6">
                        <input value="Nombre" id="first_name" type="text" class="validate pink-text text-darken-4"/>
                        <label class="active pink-text text-lighten-3" for="first_name">Nombre(s)</label>
                    </div>
                    <div class="input-field col s6">
                        <input value="nombre@gmail.com" id="email" type="text" class="validate pink-text text-darken-4"/>
                        <label class="active pink-text text-lighten-3" for="email">Email</label>
                    </div>
                    <div class="input-field col s6">
                        <input value="Escribe tu mensaje" id="message" type="text" class="validate pink-text text-darken-4"/>
                        <label class="active pink-text text-lighten-3" for="message">Email</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row center">
            <a href="" id="send-button" class="btn-large waves-effect deep-orange darken-2 white-text">Enviar</a>
        </div>
    </div>

 )

}

export default Contact;
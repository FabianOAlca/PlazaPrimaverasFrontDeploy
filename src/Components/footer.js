import React from 'react';
import {Link} from 'react-router-dom'
function Footer(props) {

 return(
 <footer className="page-footer pink darken-3">
    <div className="container">
        <div className="row">
            <div className="col l6 s12">
                <h5 className="pink-text text-lighten-3"><strong>Nosotros</strong></h5>
                <p className="white-text  text-lighten-4">Plaza Primavera's es parte de Villa de Álvarez desde hace 8 años, fundada en 2012, nuestro objetivo
                 siempre ha sido ofrecer una amplia y diversa gama de productos a nuestros clientes, así como espacios óptimos para todos nuestros locatarios.</p>
            </div>
            <div className="col l3 s12">
                <h5 className="pink-text text-lighten-3"><strong>Navegación</strong></h5>
                <ul>
                    <li><Link className="white-text" to="/home">Inicio  </Link></li>
                    <li><Link className="white-text" to="/directory">Directorio</Link></li>
                    <li><Link className="white-text" to="/aboutUs">Conocenos</Link></li>
                </ul>
            </div>
            <div className="col l3 s12">
                <h5 className="pink-text text-lighten-3"><strong>Nuestras redes</strong></h5>
                <ul>
                    <li> 
                        <a href="https://www.facebook.com/plazaprimaveras">
                            <img id="fb-icon" src="https://image.flaticon.com/icons/svg/1384/1384005.svg"/>
                        </a>
                    </li>
                </ul>
            </div>
      </div>
    </div>
    <div className="footer-copyright">
        <div className="container">
            <a className="orange-text text-orange darken-3" href="">Todos los derechos reservados. Plaza Primavera's © 2020</a>
        </div>
    </div>
</footer>
 )


}

export default Footer;



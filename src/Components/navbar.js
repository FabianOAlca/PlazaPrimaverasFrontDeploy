import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import M from 'materialize-css'



function Navbar(props) {
  
  function menu(){
    const element = document.querySelectorAll('.sidenav');
    M.Sidenav.init(element,{});
  }

  useEffect(()=>{
      menu();
  },[])

 return(
  <div>
    <nav className="nav-extended pink darken-3">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/home" className="brand-logo"><img src="./images/logo.svg"/></Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/home">Inicio</Link></li>
            <li><Link to="/directory">Directorio</Link></li>
            <li><Link to="/aboutUs">Conocenos</Link></li>
          </ul>
        </div>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li><Link to="/home">Inicio</Link></li>
      <li><Link to="/directory">Directorio</Link></li>
      <li><Link to="/aboutUs">Conocenos</Link></li>
    </ul>


  </div>

 )


}

export default Navbar;



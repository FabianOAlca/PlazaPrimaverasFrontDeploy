import React,{useEffect} from 'react';
import M from 'materialize-css';


function Galery(props){

    function doGalery(){
        const elems = document.querySelectorAll('.slider');
        M.Slider.init(elems,{duration:200});
    }

    useEffect(()=>{
        doGalery();
    },[])

    return(
        <div class="slider">
    <ul class="slides">
      <li>
        <img src="./images/plaza1.jpeg"/>
        <div class="caption center-align">
          <h3>Ven y Disfruta!!!</h3>
          <h5 class="light grey-text text-lighten-3">Ve nuestra Planta Baja</h5>
        </div>
      </li>
      <li>
        <img src="./images/plaza2.jpeg"/> 
        <div class="caption left-align">
          <h3>Encontraras Gran Variedad en Productos</h3>
          <h5 class="light grey-text text-lighten-3">Ve nuestra Planta Alta</h5>
        </div>
      </li>
      <li>
        <img src="./images/plaza3.jpg"/>
        <div class="caption right-align">
          <h3>Ven y Disfruta a lo Grande!!!</h3>
          <h5 class="light grey-text text-lighten-3">Encuentra todo tipo de Mercancia</h5>
        </div>
      </li>
    </ul>
  </div>
    )
}

export default Galery;
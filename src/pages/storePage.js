import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import M from 'materialize-css';
import './styles/storePage.css';

const endpoint = process.env.REACT_APP_BASE_URL 

function StorePage(props) {
    
    const [store, setStore] = useState([]);

    const params = useParams();

    // function to get a only one store
    async function fetchStore(){
        const response = await axios.get(`${endpoint}locales/${params.id}`);
        setStore(response.data); 
    }

    useEffect(()=>{
        fetchStore();
        const element = document.querySelector('.modal');
        M.Modal.init(element,{inDuration:300, outDuration: 225});
       // const list = document.querySelector('.dropdown-trigger');
       // M.Dropdown.init(list,{inDuration:300, outDuration: 225});

    },[])

    const {numLocal,name,description,contact,email,face_profile,
            monday,tuesday,wednesday,thursday,friday,saturday,sunday} = store;

    return(
        <div className="container">
            <div className="seccion">
                <div className="row">
                    <h3 className="header left grey-text name__store"><strong> {name} </strong></h3>
                </div>
                <div className="row storePage__numLocal">
                    <h4 className="header left grey-text storePage__numLocal">Local {numLocal}</h4> 
                </div>
                <div className="row s12 store__logo ">
                    <div className="col l6 s6 images__container">
                        <img src={`http://graph.facebook.com/${face_profile}/picture?width=250&height=250`}/> 
                    </div>
                    <div className="col l6 s6 images__container">
                        
                    </div>
                </div>
                <div className="row s12 info__pageStore">
                    <div className="col l4 s4 info__container">
                        <h5 className="grey-text text-darken-2"><strong>Datos</strong></h5>
                        <p className="grey-text "><strong>Teléfono: {contact} </strong></p>
                        <p className="grey-text "><strong> Correo: {email} </strong></p>
                        <div className="row">                       
                            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Horarios</a>

                            <div id="modal1" class="modal">
                                <div class="modal-content">
                                    <div className="col l4 s4">
                                    <h4>Horarios</h4>
                                        <ul>
                                            <li>L:  {monday}</li>
                                            <li>M:  {tuesday}</li>
                                            <li>M:  {wednesday}</li>
                                            <li>J:  {thursday}</li>
                                            <li>V:  {friday} </li>
                                            <li>S:  {saturday}</li>
                                            <li>D:  {sunday}</li>
                                        </ul>                               
                                    </div>
                                    <div className="col l8 s8">
                                        <img src={`http://graph.facebook.com/${face_profile}/picture?width=200&height=200`}/>
                                    </div>
                                    <a class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col l8 s8 info__container">
                        <div className="row">
                            <h5 className="grey-text text-darken-2 " ><strong>Descripcion</strong></h5>
                            <p className="grey-text store__descroption">{description}</p>
                        </div>
                        <div className="row">
                            <h5 className="grey-text text-darken-2"><strong>Redes Sociales</strong></h5>
                            <a href={`https://www.facebook.com/${face_profile}`}>
                                <img id="fb-icon" src="https://image.flaticon.com/icons/svg/1384/1384005.svg"/>
                            </a>
                        </div>
                    </div>                    
                </div> 
            </div>
        </div>

    )
}

export default StorePage;
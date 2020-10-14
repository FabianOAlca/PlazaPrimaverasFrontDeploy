import React, {useEffect,useState} from 'react';
import BoothCard from './boothCard';
import axios from 'axios';
import './styles/featured.css';
import {Link} from 'react-router-dom'

const endpoint = process.env.REACT_APP_BASE_URL 

function Featured(props){

    const [booths, setbooths] = useState([]);
    async function fetchbooths() {
        const response = await axios.get(`${endpoint}locales/`);
        setbooths(response.data)
      }
     useEffect(()=>{
        fetchbooths();
     },[])

    const filtered = booths.filter((doFiltered)=>{
        return doFiltered.featured == true;
    })
    
    const boothCardsFeatured = filtered.map((featured)=>{
        return <BoothCard booth={featured}></BoothCard>
     })


    return (
    <div className="container">
        <div className="seccion featured__seccion">
            <div className="row featured__container">
                
                <h3 
                className="header left grey-text featured__title">
                    <strong>Locales Destacados</strong>
                </h3>
                
            </div>
            <div className="row">
                {boothCardsFeatured}
            </div>
            <div className="row center">
                <Link to="/directory" id="download-button" className="btn-large waves-effect deep-orange darken-2">Ver todos</Link>
            </div> 
        </div>
    </div>
    )
}

export default Featured;
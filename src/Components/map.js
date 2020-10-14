import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap 
} from 'react-google-maps';

const Map = (props)=>{
    return(
        <GoogleMap
        defaultZoom={19}
        defaultCenter ={{lat:19.272755 , lng:-103.734679}}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
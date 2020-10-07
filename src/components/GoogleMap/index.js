import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import { createRenderer } from 'react-dom/test-utils';

const API_KEY = "AIzaSyCe4FFuZa5Rmd16xQ1bCSwj2Pzyt0Ka7jI"

const MapComponent = () => <div></div>

const GoogleMap = (props) => {

    let center = {
        lat: 59.313396,
        lng: 18.076076
    }
    let zoom = 15;
    
    return <div>
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
            <MapComponent
            lat={center.lat}
            lng={center.lng}
          />
          </GoogleMapReact>
        </div>
    </div>
}

export default GoogleMap
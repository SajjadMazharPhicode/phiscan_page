import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = () => {

    return <Map
        mapboxAccessToken="pk.eyJ1IjoibWFoYXRhYiIsImEiOiJjbGxxOGRqYzMwMXM0M3FwZ3ZlNGxobXdtIn0.rKTE-PSOjILQZtdsO6acqA"
        initialViewState={{
            longitude: 78.9629,
            latitude: 20.5937,
            zoom: 5,
            height: '100vh'
        }}
        style={{ height: '100vh', width: '100vw' }}
        // mapStyle="mapbox://styles/mahatab/cllvydbuz00e501pj5mzo25sc"
        mapStyle="mapbox://styles/mahatab/cllvydbuz00e501pj5mzo25sc"
    >
        <Marker
            longitude={22.5726} latitude={88.3639} anchor="bottom" >
            <img src="assets/warehouse.png" />
        </Marker>
    </Map>
}

export default MapBox
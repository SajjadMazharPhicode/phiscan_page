import * as React from 'react';
import Map, { Marker } from 'react-map-gl';


const MapBox = () => {
    return <Map
        mapboxAccessToken="pk.eyJ1Ijoic2FqamFkbWF6aGFyIiwiYSI6ImNsbHVwM293dzFlcWsza3BpZ3owMW8wM2oifQ.mCHHWUpVQvDGmvfkmgXxhw"
        initialViewState={{
            longitude: 78.9629,
            latitude: 20.5937,
            zoom: 5,
            height: '100vh'
        }}
        style={{ height: '100vh', width: '100vw' }}
        mapStyle="mapbox://styles/sajjadmazhar/cllupbcl100d501pb7zlqemx2"
    >
        <Marker
            longitude={22.5726} latitude={88.3639} anchor="bottom" >
            <img src="assets/w-green.png" />
        </Marker>
    </Map>
}

export default MapBox
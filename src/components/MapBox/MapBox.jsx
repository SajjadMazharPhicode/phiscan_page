import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';


const MapBox = ({wareHouseDetails}) => {
    return <Map
        mapLib={import('mapbox-gl')}
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
        {
            wareHouseDetails?.map(detail=> (
                <Marker
                    longitude={detail.location.lng} latitude={detail.location.lat}>
                    <img width="40px" src="assets/waremark.png" />
                </Marker>

            ))
        }
        
    </Map>
}

export default MapBox
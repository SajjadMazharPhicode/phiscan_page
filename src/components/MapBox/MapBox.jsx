import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = ({ wareHouseDetails }) => {
    const [closePopUp, setClosePopUp] = React.useState(false)

    const showPopup = () => {
        setClosePopUp(!closePopUp)
    }


    return <Map
        mapLib={import('mapbox-gl')}
        // mapboxAccessToken="pk.eyJ1Ijoic2FqamFkbWF6aGFyIiwiYSI6ImNsbHVwM293dzFlcWsza3BpZ3owMW8wM2oifQ.mCHHWUpVQvDGmvfkmgXxhw"
        mapboxAccessToken="pk.eyJ1Ijoic2FqamFkbWF6aGFyIiwiYSI6ImNsbHVwM293dzFlcWsza3BpZ3owMW8wM2oifQ.mCHHWUpVQvDGmvfkmgXxhw"
        initialViewState={{
            longitude: 78.9629,
            latitude: 20.5937,
            zoom: 5,
            height: '100vh'
        }}
        style={{ height: '100vh', width: '100vw' }}
        // mapStyle="mapbox://styles/mahatab/cllvydbuz00e501pj5mzo25sc"
        mapStyle="mapbox://styles/sajjadmazhar/cllupbcl100d501pb7zlqemx2"
    >
        {
            wareHouseDetails?.map((detail, i) => (
                <div onClick={() => showPopup()}>
                    <Marker
                        longitude={detail.location.lng} latitude={detail.location.lat}>
                        <img width="25px" style={{ filter: "invert()" }} src="assets/warehouse2.png" />
                        
                    </Marker>

                    {closePopUp ? < Popup
                        latitude={detail.location.lat}
                    longitude={detail.location.lng}
                    closeButton={true}
                    closeOnClick={false}
                    // onClose={() => this.setState({ showPopup: false })}
                        anchor="top" >
                    <div>You are here</div>
                </Popup> : ''}
    </div>
            ))
        }
    </Map >
}

export default MapBox
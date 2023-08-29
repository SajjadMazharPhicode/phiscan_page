import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = ({ wareHouseDetails, setWarehouseDetails }) => {
    const [closePopUp, setClosePopUp] = React.useState(false)

    const togglePopUp = (id, action) => {
        let hoverUpdate
        if(action === 'in') {
            hoverUpdate = wareHouseDetails.map((item) => {
                if(id === item.id) {
                    item.hover = true
                    return item
                }
                    return item
            })
        }else{
            hoverUpdate = wareHouseDetails.map((item) => {
                if(id === item.id) {
                    item.hover = false
                    return item
                }
                    return item
            })
        }
        setWarehouseDetails(hoverUpdate)
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
            wareHouseDetails?.map(detail => (
                <Marker
                    longitude={detail.location.lng} latitude={detail.location.lat}>
                    <img
                        onMouseEnter={() => { togglePopUp(detail.id, 'in') }}
                        onMouseLeave={() => { togglePopUp(detail.id, 'out') }}
                        width="40px" src="assets/waremark.png" />
                </Marker>
            ))
        }

        {
            wareHouseDetails?.map((detail) => (
                <Popup
                style={{display: detail.hover ? '' : 'none'}}
                    longitude={detail.location.lng}
                    latitude={detail.location.lat}

                    >
                    <div>
                        <p>{detail.warehouse}</p>
                        <p>{detail.address}</p>
                    </div>
                </Popup>
            ))
        }


    </Map >
}

export default MapBox
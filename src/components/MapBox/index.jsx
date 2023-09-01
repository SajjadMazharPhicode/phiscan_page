import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import dataContext from '../../context/DataContext';

const MapBox = ({ wareHouseDetails = null, setWarehouseDetails = null, sstyle, from, zoom }) => {

    const { gotToPage } = React.useContext(dataContext)

    const togglePopUp = (id, action) => {
        if(from==='dashboard') return;
        let hoverUpdate
        if (action === 'in') {
            hoverUpdate = wareHouseDetails.map((item) => {
                if (id === item.id) {
                    item.hover = true
                    return item
                }
                return item
            })
        } else {
            hoverUpdate = wareHouseDetails.map((item) => {
                if (id === item.id) {
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
        mapboxAccessToken={process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}
        initialViewState={{
            longitude: from === 'dashboard' ? wareHouseDetails[0].location.lng : 78.9629,
            latitude: from === 'dashboard' ? wareHouseDetails[0].location.lat : 20.5937,
            zoom,
            height: '100vh',
            width: '100vw'
        }}
        style={sstyle}
        mapStyle="mapbox://styles/sajjadmazhar/cllupbcl100d501pb7zlqemx2"
    >
        {
            wareHouseDetails?.map(detail => (
                <Marker
                    longitude={detail.location.lng}
                    latitude={detail.location.lat}
                >
                    <img
                        onClick={() => {gotToPage(detail)}}
                        onMouseEnter={() => { togglePopUp(detail.id, 'in') }}
                        onMouseLeave={() => { togglePopUp(detail.id, 'out') }}
                        width="60px" src="assets/waremark.png"
                    />
                </Marker>
            ))
        }

        {
            wareHouseDetails?.map((detail) => (
                <Popup
                    style={{ display: detail.hover ? '' : 'none' }}
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
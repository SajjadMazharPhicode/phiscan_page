import React from 'react'
// import { Map } from '@googlemaps/react-wrapper'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import iconn from '../Markers/warehouse.png'
import Card from './Card';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative'
};

const MapView = (props) => {

  return (
    <>
      <Map
        google={props.google}
        zoom={5}
        style={mapStyles}
        streetViewControl={false}
        initialCenter={
          {
            lat: 20.5937,
            lng: 78.9629
          }
        }
        disableDefaultUI = {true}
      >

        {
          props.wareHouseDetails?.map(marker => <Marker key={marker.location.lat.toString() + marker.location.lng} position={{ lat: marker.location.lat, lng: marker.location.lng }} icon={{ 
            url: iconn
            , scaledSize: new props.google.maps.Size(35, 35) }} style={{ width: "16px" }} />)
        }
      </Map>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDz0iaw069jmolmRRRzRTRaCOCtdsSoaMg'
})(MapView);
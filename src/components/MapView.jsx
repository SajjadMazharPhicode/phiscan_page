import React, { useState } from 'react'
// import { Map } from '@googlemaps/react-wrapper'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import iconn from '../marker.png'
import wg from '../markers/wg.png'
import wr from '../markers/wr.png'
import wo from '../markers/wo.png'
import Card from './Card';
// import MarkerPoint from './MarkerPoint';

const mapStyles = {
  width: '100%',
  height: '100%',
  position:'relative'
};

const MapView = (props) => {

  return (
    <>
      <Map
          google={props.google}
          zoom={5}
          style={mapStyles}
          initialCenter={
            {
              lat: 20.5937,
              lng: 78.9629
            }
          }
        >
          
          {
            props.wareHouseDetails?.map(marker=> <Marker key={marker.location.lat.toString()+marker.location.lng} position={{lat:marker.location.lat, lng:marker.location.lng}} icon={{
              url:marker.basicInfo.vacantCapacity <= 100 ? wr :
              marker.basicInfo.vacantCapacity >= 200 && marker.basicInfo.vacantCapacity < 300 ? wo : wg
              , scaledSize:new props.google.maps.Size(45,45)}} style={{width:"16px"}} />)
          }
        </Map>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDz0iaw069jmolmRRRzRTRaCOCtdsSoaMg'
})(MapView);
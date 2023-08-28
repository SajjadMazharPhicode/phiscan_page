import React from 'react'
import { Marker } from 'google-maps-react';


const MarkerPoint = ({lat, lng}) => {
    console.log(lat, lng)
  return (
    <Marker position={{lat: 20.5937,
        lng: 78.9629}} />
  )
}

export default MarkerPoint
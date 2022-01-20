import {useState} from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
// import mapboxgl from 'mapbox-gl';

import point_icon from './assets/point.png'
import hotel_icon from './assets/hotel.png'
// var MapboxDirections = require('@mapbox/mapbox-gl-directions')

function Map({trip, zoom, latitude, longitude, locations}) {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWZ1cm8iLCJhIjoiY2t5ZW4zOWFpMGRqczJxcWtheWNvZHQ2aiJ9.hn3zYWxYhJZv0YcZAVQcsA'
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: zoom
  });

  // mapboxgl.accessToken = MAPBOX_TOKEN
  // const map = new mapboxgl.Map({
  //   container: 'map',
  //   style: 'mapbox://styles/mapbox/streets-v11',
  // });

  // map.addControl(new MapboxDirections({
  //   accessToken: mapboxgl.accessToken
  // }),
  // 'top-left');




  // const [directions, setDirections] = useState(null);

  // fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${trip.from_longitude + ',' + trip.from_latitude + ';' + trip.to_longitude + ',' + trip.to_latitude}?access_token={MAPBOX_TOKEN}`)
  // .then(response => response.json())
  // .then(directionsRes => {
  //   setDirections([{
  //     path: [[-111.720440,40.318460],[directionsRes.waypoints[1].location[0],directionsRes.waypoints[1].location[1]]],
  //     name: 'location-location',
  //     color: [0,0,0]
  //   }])
  // })
  // const start = document.querySelector('[placeholder="Choose a starting place"]')
  // const destination = document.querySelector('[placeholder="Choose destination"]')
  // start.value = (trip.from)
  // destination.value = (trip.to)

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={setViewport}>

      <Marker key='11111' latitude={trip.from_latitude} longitude={trip.from_longitude}>
        <button class='marker-button'>
          <img className='marker-button' src={point_icon} alt='FROM'/>
        </button>
      </Marker>

      <Marker key='2222' latitude={trip.to_latitude} longitude={trip.to_longitude}>
        <button class='marker-button'>
          <img className='marker-button' src={point_icon} alt='TO'/>
        </button>
      </Marker>

      {locations.map((location) => {
        if (location.latitude && location.longitude) {
          return (
            <Marker key={location.id} latitude={location.latitude} longitude={location.longitude}>
              <button class='marker-button'>
                <img className='marker-button' src={hotel_icon} alt='hotel'/>
              </button>
            </Marker>
          )
        } else { return null }
      })}
    </ReactMapGL>
  )
}

export default Map
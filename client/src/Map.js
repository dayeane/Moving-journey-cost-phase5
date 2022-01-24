import {useState, useEffect} from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';


function Map({zoom, latitude, longitude, locations, point_icon}) {

  const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWZ1cm8iLCJhIjoiY2t5ZW4zOWFpMGRqczJxcWtheWNvZHQ2aiJ9.hn3zYWxYhJZv0YcZAVQcsA'
  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: zoom
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={setViewport}>

      {locations.map((marker) => {
        if (marker.latitude && marker.longitude) {
          return (
            <Marker key={marker.id} latitude={marker.latitude} longitude={marker.longitude}>
              <button className='marker-button'>
                <img className='marker-button' src={point_icon} alt='hotel'/>
              </button>
            </Marker>
          )
        } else { 
          return null
        }
      })}
    </ReactMapGL>
  )
}

export default Map
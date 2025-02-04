import {useState, useEffect} from 'react'
import MapGL, { Source, Layer, Marker } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import point_icon from './assets/point.png'

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function Map({zoom, from_latitude, from_longitude, to_latitude, to_longitude}) {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWZ1cm8iLCJhIjoiY2t5ZW4zOWFpMGRqczJxcWtheWNvZHQ2aiJ9.hn3zYWxYhJZv0YcZAVQcsA'
  const [viewport, setViewport] = useState({
    latitude: (from_latitude + to_latitude) /2,
    longitude: (from_longitude + to_longitude) /2,
    zoom: zoom
  });

  const [tripRoute, setTripRoute] = useState({
    type: 'Feature',
  });

  useEffect(() => {
    fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${from_longitude + ',' + from_latitude + ';' + to_longitude + ',' + to_latitude}?geometries=geojson&access_token=${MAPBOX_TOKEN}`)
    .then(response => response.json())
    .then(data => {
      if (data['routes'] && !data['message']) {
        setTripRoute({
          ...tripRoute,
          geometry: data['routes'][0]["geometry"]
        })
      }
    })
  },[])

  return (
    <>
      <MapGL
        style={{ width: '100%', height: '400px' }}
        mapStyle='mapbox://styles/mapbox/dark-v10'
        accessToken={MAPBOX_TOKEN}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}>

        <Marker latitude={from_latitude} longitude={from_longitude}>
          <img className='marker-btn' src={point_icon} alt='LOCATION'/>
        </Marker>

        <Marker latitude={to_latitude} longitude={to_longitude}>
          <img className='marker-btn' src={point_icon} alt='LOCATION'/>
        </Marker>

        <Source id='route' type='geojson' data={tripRoute} />
        <Layer
          id='route'
          type='line'
          source='route'
          layout={{
            'line-join': 'round',
            'line-cap': 'round'
          }}
          paint={{
            'line-color': '#888',
            'line-width': 8
          }}
        />
      </MapGL>
    </>
  )
}

export default Map
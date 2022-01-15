import {useState} from 'react'
import TripEditForm from "./TripEditForm";
import MapGL, { Source, Layer, Marker } from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function TripSummary({trip}) {
  const [currentTrip, setCurrentTrip] = useState(trip)
  const [editMode, setEditMode] = useState(false)
  const [viewport, setViewport] = useState({
    latitude: currentTrip.from_latitude,
    longitude: currentTrip.from_longitude,
    zoom: 11
  });

  const trip_route = {
    type: "Feature",
    properties: {},
    geometry: {
        type: "LineString",
        coordinates: [
            [currentTrip.from_latitude, currentTrip.from_longitude],
            [currentTrip.to_latitude, currentTrip.to_longitude]
        ]
    }
  };

  const data = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-122.48369693756104, 37.83381888486939],
        [-122.48348236083984, 37.83317489144141],
        [-122.48339653015138, 37.83270036637107],
        [-122.48356819152832, 37.832056363179625],
        [-122.48404026031496, 37.83114119107971],
        [-122.48404026031496, 37.83049717427869],
        [-122.48348236083984, 37.829920943955045],
        [-122.48356819152832, 37.82954808664175],
        [-122.48507022857666, 37.82944639795659],
        [-122.48610019683838, 37.82880236636284],
        [-122.48695850372314, 37.82931081282506],
        [-122.48700141906738, 37.83080223556934],
        [-122.48751640319824, 37.83168351665737],
        [-122.48803138732912, 37.832158048267786],
        [-122.48888969421387, 37.83297152392784],
        [-122.48987674713133, 37.83263257682617],
        [-122.49043464660643, 37.832937629287755],
        [-122.49125003814696, 37.832429207817725],
        [-122.49163627624512, 37.832564787218985],
        [-122.49223709106445, 37.83337825839438],
        [-122.49378204345702, 37.83368330777276]
      ]
    }
  };


  let total_cost = 0

  if (!trip) {
    return(
      <h1>no trip selected please refresh</h1>
    )
  }

  if(trip.costs.length > 0) {
    total_cost = trip.costs.map(x => x.amount).reduce((x, y) => x + y)
  }

  if(editMode){
    return( <TripEditForm trip={currentTrip} editMode={editMode} setEditMode={setEditMode} setCurrentTrip={setCurrentTrip}/> )
  } else {
    return (
      <div className="card mt-5">
        <div className="card-header font-weight-bold d-flex justify-content-between">
          <h4>Trip Summary</h4>
          <div className="custom-control custom-switch">
            <input onChange={() => setEditMode(!editMode)} checked={editMode} type="checkbox" className="custom-control-input" id="customSwitch1" />
            <label className="custom-control-label" htmlFor="customSwitch1">Toggle this box for edit mode</label>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-around">
            <p className="col"><span className="font-weight-bold">From:</span> {currentTrip.from}</p>
            <p className="col"><span className="font-weight-bold">To:</span> {currentTrip.to}</p>
          </div>
          <div className="d-flex justify-content-around mt-2">
            <p className="col"><span className="font-weight-bold">Depart Date:</span> {currentTrip.depart_date}</p>
            <p className="col"><span className="font-weight-bold">Budget:</span> {currentTrip.budget}</p>
          </div>

          <div className="d-flex justify-content-around mt-2">
            <p className="col"><span className="font-weight-bold">Total Expenses:</span> { total_cost }</p>
          </div>
        </div>

        <MapGL
          style={{ width: '100%', height: '300px' }}
          mapStyle='mapbox://styles/mapbox/light-v9'
          accessToken="pk.eyJ1IjoiYWZ1cm8iLCJhIjoiY2t5ZW4zOWFpMGRqczJxcWtheWNvZHQ2aiJ9.hn3zYWxYhJZv0YcZAVQcsA"
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          onViewportChange={setViewport}
          {...viewport}
        >
          <Marker latitude={currentTrip.from_latitude} longitude={currentTrip.from_longitude}>
            <div>📍</div>
          </Marker>

          <Marker latitude={currentTrip.to_latitude} longitude={currentTrip.to_longitude}>
            <div>📍</div>
          </Marker>

          <Source id='route' type='geojson' data={data} />
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
      </div>
    )
  }
}

export default TripSummary;
import {useState} from 'react'
import TripEditForm from "./TripEditForm";
import ReactMapGL from 'react-map-gl';
import { Marker } from 'react-map-gl';

function TripSummary({trip}) {
  const [currentTrip, setCurrentTrip] = useState(trip)
  const [editMode, setEditMode] = useState(false)
  const [viewport, setViewport] = useState({
    latitude: currentTrip.from_latitude,
    longitude: currentTrip.from_longitude,
    width: '100%',
    height: '300px',
    zoom: 8
  });

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

        <ReactMapGL
          {...viewport}
          className='map'
          mapboxApiAccessToken="pk.eyJ1IjoiYWZ1cm8iLCJhIjoiY2t5ZW4zOWFpMGRqczJxcWtheWNvZHQ2aiJ9.hn3zYWxYhJZv0YcZAVQcsA"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          <Marker key={currentTrip.id} latitude={currentTrip.from_latitude} longitude={currentTrip.from_longitude}>
            <button class='marker-button'>
              <img className='marker-button' src='/logo.svg' alt='FROM'/>
            </button>
          </Marker>

          <Marker key={currentTrip.id} latitude={currentTrip.to_latitude} longitude={currentTrip.to_longitude}>
            <button class='marker-button'>
              <img className='marker-button' src='/logo.svg' alt='TO'/>
            </button>
          </Marker>
        </ReactMapGL>
      </div>
    )
  }
}

export default TripSummary;
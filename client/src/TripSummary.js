import {useState} from 'react'
import TripEditForm from "./TripEditForm";
import Map from './Map'

function TripSummary({trip}) {
  const [currentTrip, setCurrentTrip] = useState(trip)
  const [editMode, setEditMode] = useState(false)

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

        <Map trip={trip} />
      </div>
    )
  }
}

export default TripSummary;
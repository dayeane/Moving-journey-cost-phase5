import {useState} from "react"
import { Link } from 'react-router-dom';

function Trips({trips, getTrip}) {
  const [tripList, setTrips] = useState(trips);

  function deleteId(id) {
    fetch(`/trips/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => setTrips(data));
  }

  return(
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Trips</h4>
        </div>
        <div className="card-body d-flex justify-content-around flex-wrap">
          {tripList.map((trip, index ) => {
            return(
              <Link to="/trip" key={trip.id} className="card text-white bg-info mb-3 col-12 col-lg-5" onClick={() => getTrip(trip.id)}>
                <div className="card-header d-flex justify-content-between">
                  <h5>Trip {index}</h5>
                  <div onClick={() => {if(window.confirm('Delete the item?')){deleteId(trip.id)}}} className="btn btn-danger">X</div>
                </div>
                <div className="card-body">
                  <p><span className="font-weight-bold">Depart Date:</span> {trip.depart_date}</p>
                  <p><span className="font-weight-bold">From:</span> {trip.from}</p>
                  <p><span className="font-weight-bold">To:</span> {trip.to}</p>
                  <p><span className="font-weight-bold">Budget:</span> {trip.budget}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Trips;
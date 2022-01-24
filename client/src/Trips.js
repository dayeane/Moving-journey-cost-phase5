import {useState, useEffect} from "react"
import TripForm from "./TripForm";


function Trips({user, setUser, trips, setTrips, getTrip}) {
  
  useEffect(() => {
  }, [])
  
  function deleteTrip(tripId) {
    fetch(`/trips/${tripId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => {
        trips.splice(trips.findIndex(function(trip){
          return trip.id === data.id;
        }), 1);
        setTrips(trips)
      });
  }

  return(
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Trips</h4>
        </div>
        <div className="card-body d-flex justify-content-around flex-wrap">
          {trips.map((trip, index ) => {
            return(
              <div key={trip.id} className="card text-white bg-info mb-3 col-12 col-lg-5" >
                <div className="card-header d-flex justify-content-between">
                  <h5>Trip {index}</h5>
                  {/* <div onClick={() => deleteId(hotel.id)} className="btn btn-danger">X</div> */}
                  <div onClick={() => deleteTrip(trip.id)} className="btn btn-danger">X</div>
                </div>
                <div className="card-body" onClick={() => getTrip(trip.id)}>
                  <p><span className="font-weight-bold">Depart Date:</span> {trip.depart_date}</p>
                  <p><span className="font-weight-bold">From:</span> {trip.from}</p>
                  <p><span className="font-weight-bold">To:</span> {trip.to}</p>
                  <p><span className="font-weight-bold">Budget:</span> {trip.budget}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* <TripForm trips={trips}/> */}
    </>
  )
}

export default Trips;
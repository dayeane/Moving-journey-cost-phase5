// import {useState} from "react"

function Trips({trips, getTrip}) {
  return(
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Trips</h4>
        </div>
        <div className="card-body d-flex justify-content-around flex-wrap">
          {trips.map((trip, index ) => {
            return(
              <div className="card text-white bg-info mb-3" onClick={() => getTrip(trip.id)}>
                <div className="card-header d-flex justify-content-between">
                  <h5>Trip {index}</h5>
                  {/* <div onClick={() => deleteId(hotel.id)} className="btn btn-danger">X</div> */}
                </div>
                <div className="card-body">
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
    </>
  )
}

export default Trips;
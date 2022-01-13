import {useState, useRef} from "react"
import './App.css';
import TripSummary from "./TripSummary";
import Hotels from "./Hotels";
import Providers from "./Providers";
import Stops from "./Stops";
import TripForm from "./TripForm";

function App() {
  const [trip, setTrip] = useState({});
  const tripId = useRef('');


  function getTrip(e) {
    e.preventDefault()
    fetch(`/trips/${tripId.current.value}`)
    .then((r) => r.json())
    .then((data) => {
      setTrip(data)
    });
  }

  if (!trip.from) {
    return (
      <>
        <div className="card mt-5 text-center">
          <div className="card header bg-light"></div>
          <h1>Moving Cost Trip</h1>
        </div>
        <div className="card mt-5 text-center">
          <div className="card-header">
            Please select and ID from 1 to 5 generated by the seeds
          </div>
          <form className="col-6 offset-3 mt-5 mb-5" onSubmit={getTrip}>
            <div className="form-group">
              <input type="number" ref={tripId} placeholder="Trip ID"  className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <TripForm trip={trip} setTrip={setTrip}/>
      </>
    )
  }

  return (
    <>
      <TripSummary trip={trip} />
      <Hotels trip={trip} />
      <Providers trip={trip} />
      <Stops trip={trip} />
    </>



  )

}

export default App;

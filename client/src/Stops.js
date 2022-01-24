import {useState, useEffect} from "react"
import StopsForm from "./StopsForm";

function Stops({trip}) {
  const [stops, setStop] = useState([]);

  useEffect(() => {
    fetch(`/trips/${trip.id}/stops`)
    .then((r) => r.json())
    .then((data) => {setStop(data)});
  }, [])

  function deleteId(id) {
    fetch(`/trips/${trip.id}/stops/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => setStop(data));
  }

  return(
    <>
      <div className="card mt-5">
        <div className="card-header font-weight-bold">
          <h4>Stops</h4>
        </div>
        <div className="card-body d-flex justify-content-around flex-wrap">
          {stops.map( (stop, index) => {
            return(
              <div  className="card text-white bg-info mb-3 col-12 col-lg-5" key={stop.id}>
                <div className="card-header d-flex justify-content-between">
                  <h5>Stop {index + 1}</h5>
                  <div onClick={() => deleteId(stop.id)} className="btn btn-danger">X</div>
                </div>
                <div className="card-body ">
                  <div><span className="font-weight-bold">Stop Reason:</span> {stop.stop_reason} </div>
                  <div><span className="font-weight-bold">Notes:</span> {stop.note}</div>
                  <div><span className="font-weight-bold">Cost:</span> {stop.cost.amount}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <StopsForm trip={trip} setStop={setStop}/>
    </>
  )
}

export default Stops;
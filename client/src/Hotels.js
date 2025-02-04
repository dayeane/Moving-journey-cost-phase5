import {useState} from "react"
import HotelsForm from "./HotelsForm";
import Map from './Map'
import hotel_icon from './assets/hotel.png'

function Hotels({trip}) {
  const [hotels, setHotels] = useState(trip.hotels);

  function deleteId(id) {
    fetch(`/trips/${trip.id}/hotels/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => setHotels(data));
  }


  return(
    <>
      <div className="card">
        <Map trip={trip} zoom={3} point_icon={hotel_icon} latitude={trip.from_latitude} longitude={trip.from_longitude} locations={hotels}/>
        <div className="card-header card-header-index font-weight-bold">
          <h4>Hotels</h4>
        </div>
        <div className="card-body card-body-index d-flex justify-content-around flex-wrap">
          {hotels.map((hotel, index ) => {
            return(
              <div key={hotel.id} className="card text-white bg-info mb-3 col-12 col-lg-6">
                <div className="card-header d-flex justify-content-between">
                  <h5>Hotel {index + 1} </h5>
                  <div onClick={() => {if(window.confirm('Delete the item?')){deleteId(hotel.id)}}} className="btn btn-danger btn-destroy">X</div>
                </div>
                <div className="card-body">
                  <p><span className="font-weight-bold">Check in:</span> {hotel.check_in}</p>
                  <p><span className="font-weight-bold">Check out:</span> {hotel.check_out}</p>
                  <p><span className="font-weight-bold">Location:</span> {hotel.location}</p>
                  <p><span className="font-weight-bold">Cost:</span> {hotel.cost.amount}</p>
                </div>
              </div>
            )
          })}
        </div>
        <HotelsForm trip={trip} setHotels={setHotels}/>
      </div>
    </>
  )
}

export default Hotels;
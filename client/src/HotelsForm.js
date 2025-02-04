import {useRef} from 'react'

function HotelsForm({trip, setHotels, setMarkers}) {

  const check_in = useRef('');
  const check_out = useRef('');
  const location = useRef('');
  const cost = useRef('');

  function createHotel(e) {
    e.preventDefault();
    const target = e.currentTarget

    const newHotel = {
      hotel: {
        check_in: check_in.current.value,
        check_out: check_out.current.value,
        location: location.current.value,
        cost_attributes: {
          amount: cost.current.value
        }
      }
    }

    fetch(`/trips/${trip.id}/hotels`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newHotel)
    })
    .then(res => res.json())
    .then(data => {
      setHotels(data)
      target.reset()
    })
  }

  return(
    <div className="card m-2 mt-5" >
     <div className="card-header card-header-index"><h4>New Hotel</h4></div>
     <div className="card-body d-flex justify-content-around flex-wrap">
        <form className="ml-4" onSubmit={createHotel}>
          <input className=" mr-4" ref={check_in} type="date" name="check in" placeholder="Check in" required/>
          <input className=" mr-4" ref={check_out} type="date" name="check out" placeholder="Check out" required/>
          <input className=" mr-4" ref={location} type="text" name="location" placeholder="Location" required/>
          <input className=" mr-4" ref={cost} type="number" name="cost" placeholder="Cost" required/>
          <button type="submit" className="btn btn-primary mb-2 mt-2 mr-6">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default HotelsForm;
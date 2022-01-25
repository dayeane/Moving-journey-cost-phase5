import {useRef} from 'react'

function TripForm({trip, setTrip, user}) {

  const from = useRef('')
  const to = useRef('');
  const date = useRef('')
  const budget = useRef('false')

  function createTrip(e) {
    e.preventDefault();

    const newTrip = {
      trip: {
        from: from.current.value,
        to: to.current.value,
        depart_date: date.current.value,
        budget: budget.current.value,
        user_id: user.id
      }
    }

    fetch("/trips", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrip)
    })
    .then(res => res.json())
    .then(data => {
      setTrip(data)
    })

  }

  return(
    <div className="card m-2 mt-5" >
      <div className="card-header card-header-index"><h4>New Trip</h4></div>
      <div className="card-body d-flex justify-content-around flex-wrap">
        <form className="ml-4" onSubmit={createTrip}>
          <input ref={from}className="mb-2 mr-2" type="text" name="from" placeholder="From" required/>
          <input ref={to} className="mr-4" type="text" name="to" placeholder="To" required/>
          <input ref={date} className="mr-4"  type='date' name="depart-date" placeholder="Depart Date" required/>
          <input ref={budget} className="mr-4" type="text" name="budget" placeholder="Budget" required/>
          <button type="submit" className="btn btn-primary mb-2 mt-2 mr-6">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default TripForm;
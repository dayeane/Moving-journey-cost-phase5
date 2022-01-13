import {useRef} from 'react'

function StopsForm({trip, setStop}) {
  const stop_reason = useRef('');
  const note = useRef('');
  const cost = useRef('');

  function createStop(e) {
    e.preventDefault();
    const target = e.currentTarget

    const newStop = {
      stop: {
        stop_reason: stop_reason.current.value,
        note: note.current.value,
        cost_attributes: {
          amount: cost.current.value
        }
      }
    }

    fetch(`/trips/${trip.id}/stops`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newStop)
    })
    .then(res => res.json())
    .then(data => {
      setStop(data)
      target.reset()
    })
  }


  return(
    <div className="card mt-5 mb-2" >
     <div className="card-header"><h4>New Stop</h4></div>
       <form onSubmit={createStop}>
        <input className=" mr-4 " ref={stop_reason}type="text" name="stop reason" placeholder="Stop reason"/>
        <input className=" mr-4"  ref={note}type="text" name="notes" placeholder="Notes"/>
        <input className=" mr-4"  ref={cost}type="number" name="cost" placeholder="Amount"/>
        <button type="submit" className="btn btn-primary mt-2 mb-2 mr-6">Submit</button>
      </form>
    </div>
  )
}

export default StopsForm;
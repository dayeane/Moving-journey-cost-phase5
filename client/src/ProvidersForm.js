import {useRef} from 'react'

function ProvidersForm({trip, setProviders}) {
  const name = useRef('');
  const date = useRef('');
  const note = useRef('');
  const cost = useRef('');

  function createProvider(e) {
    e.preventDefault();
    const target = e.currentTarget

    const newProvider = {
      provider: {
        name: name.current.value,
        date: date.current.value,
        note: note.current.value,
        cost_attributes: {
          amount: cost.current.value
        }
      }
    }

    fetch(`/trips/${trip.id}/providers`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newProvider)
    })
    .then(res => res.json())
    .then(data => {
      setProviders(data)
      target.reset()
    })
  }


  return(
    <div className="card mt-5 mb-2" >
     <div className="card-header"><h4>New Provider</h4></div>
       <form className="ml-4" onSubmit={createProvider}>
        <input className="mr-4" ref={name} type="text" name="name" placeholder="Name" required/>
        <input className="mr-4" ref={date} type="date" name="date" placeholder="Date" required/>
        <input className="mr-4" ref={note} type="text" name="note" placeholder="Note"/>
        <input className="mr-4" ref={cost} type="number" name="cost" placeholder="Cost" required/>
        <button type="submit" className="btn btn-primary mt-2 mb-2 mr-6">Submit</button>
      </form>
    </div>
  )
}

export default ProvidersForm;
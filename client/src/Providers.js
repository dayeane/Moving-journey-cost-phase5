import {useState} from "react"
import ProvidersForm from "./ProvidersForm";

function Providers({trip}) {
  const [providers, setProviders] = useState(trip.providers);

  function deleteId(id) {
    fetch(`/trips/${trip.id}/providers/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json"  }
    }).then((r) => r.json())
      .then((data) => setProviders(data));
  }

  return(
    <div className="m-2">
      <div className="card mt-5">
        <div className="card-header card-header-index font-weight-bold">
          <h4>Providers</h4>
        </div>
        <div className="card-body card-body-index d-flex justify-content-around flex-wrap">
          {providers.map((provider, index ) => {
            return(
              <div  className="card text-white bg-info mb-3 col-12 col-lg-6" key={provider.id}>
                <div className="card-header d-flex justify-content-between">
                  <h5>Provider {index + 1}</h5>
                  <div onClick={() => {if(window.confirm('Delete the item?')){deleteId(provider.id)}}} className="btn btn-danger btn-destroy">X</div>
                </div>
                <div className="card-body">
                  <p><span className="font-weight-bold">Name:</span> {provider.name}</p>
                  <p><span className="font-weight-bold">Date:</span> {provider.date}</p>
                  <p><span className="font-weight-bold">Note:</span> {provider.note}</p>
                  <p><span className="font-weight-bold">Cost:</span> {provider.cost.amount}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ProvidersForm trip={trip} setProviders={setProviders}/>
    </div>
  )
}

export default Providers;
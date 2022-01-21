import {useState, useRef, useEffect} from "react"
import './App.css';
import TripSummary from "./TripSummary";
import Hotels from "./Hotels";
import Providers from "./Providers";
import Stops from "./Stops";
import TripForm from "./TripForm";
import { Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav'
import Login from './Login'
import SignupForm from './SignupForm'
import Trips from './Trips'

function App() {
  const [trip, setTrip] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function getTrip(tripId) {
    fetch(`trips/${tripId}`)
    .then((r) => r.json())
    .then((data) => {
      setTrip(data)
    });
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  //USER LOGOUT HANDLER
  function onLogout() {
    setUser(null);
  }

  if (!user || user.error){
    return(
      <div>
        <Login onLogin={setUser} />
        <SignupForm setUser={setUser}/>
      </div>
    )
  }

  if (user.id && !trip.from) {
    return (
      <>
        <div className="card mt-5 text-center">
          <div className="card header bg-light"></div>
          <h1>Moving Cost Trip</h1>
          <Link to="/"><button className="btn btn-danger mt-3 mb-3" style={{fontFamily:"dosis"}} type="submit" value="Add Item"  onClick={handleLogout} >Logout</button></Link>
        </div>
        <div className="card mt-5 text-center">
          <Trips trips={user.trips} getTrip={getTrip}/>
        </div>

        <TripForm user={user} trip={trip} setTrip={setTrip}/>
      </>
    )
  }

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/hotels'>
          <Hotels trip={trip} />
        </Route>
        <Route path='/providers'>
          <Providers trip={trip} />
        </Route>
        <Route path='/stops'>
          <Stops trip={trip} />
        </Route>
        <Route path='/'>
          <TripSummary trip={trip} />
        </Route>
      </Switch>
    </div>
  )

}

export default App;

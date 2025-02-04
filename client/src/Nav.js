
import { Link } from 'react-router-dom';

function Nav({handleLogout, tripId, getTrip}) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/"><h5 className="navbar-btn">Home<span className="sr-only">(current)</span></h5></a>
            </li>
            <li className="nav-item">
              <Link to="/trip" onClick={() => getTrip(tripId)}><h5 className="navbar-btn">Trip</h5></Link>
            </li>
            <li className="nav-item">
              <Link to="/hotels" onClick={() => getTrip(tripId)}><h5 className="navbar-btn" >Hotels</h5></Link>
            </li>
            <li className="nav-item">
              <Link to="/providers" onClick={() => getTrip(tripId)}><h5 className="navbar-btn">Providers</h5></Link>
            </li>
            <li className="nav-item">
              <Link to="/stops" onClick={() => getTrip(tripId)}><h5 className="navbar-btn">Stops</h5></Link>
            </li>
          </ul>
        </div>
        <button className="logout-btn btn btn-danger mt-3 mb-3" type="submit" value="Add Item"  onClick={handleLogout} >Logout</button>
      </nav>
    </div>
  )
}

export default Nav
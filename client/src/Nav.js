
import { Link } from 'react-router-dom';

function Nav({handleLogout}) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#0275d8", borderRadius:"10px", fontFamily:"dosis"}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/"><h5 style={{color:"white", margin: "auto", padding:"10px", textDecoration:"none"}}>Home<span className="sr-only">(current)</span></h5></a>
            </li>
            <li className="nav-item">
              <Link to="/trip"><h5 style={{color:"white", margin: "auto", padding:"10px", textDecoration:"none"}}>Trip</h5></Link>
            </li>
            <li className="nav-item">
              <Link to="/hotels"><h5 style={{color:"white", margin: "auto", padding:"10px"}}>Hotels</h5></Link>
            </li>
            <li className="nav-item">
              <Link to="/providers"><h5 style={{color:"white", margin: "auto", padding:"10px"}}>Providers</h5></Link>
            </li>
            <li className="nav-item">
              <Link to="/stops"><h5 style={{color:"white", margin: "auto", padding:"10px"}}>Stops</h5></Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-danger mt-3 mb-3" style={{fontFamily:"dosis"}} type="submit" value="Add Item"  onClick={handleLogout} >Logout</button>
      </nav>
    </div>
  )
}

export default Nav
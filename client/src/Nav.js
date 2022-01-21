import { Link } from 'react-router-dom';

function Nav() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#0275d8", borderRadius:"10px", fontFamily:"dosis"}}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/"><h5 style={{color:"white", margin: "auto", padding:"10px", textDecoration:"none"}}>Trip<span className="sr-only">(current)</span></h5></Link>
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
        </nav>
      </div>
    )
}

export default Nav
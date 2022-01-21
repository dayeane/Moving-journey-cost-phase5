import {useState} from 'react'

function Login({ onLogin }) {
  const [email_address, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address, password }),
    })
      .then((r) => r.json())
      .then((user) => {
        debugger
        onLogin(user)});
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8" >
          <div className="card mt-5" style={{borderRadius:"10px", fontFamily:"dosis"}}>
            <div className="card-header bg-primary" style={{color:"white"}} >
              <h3 className="text-center" >Welcome to the Moving Journey Cost!</h3>
            </div>
            <h5 className="text-center mt-2" >User Login:</h5>
              <form  onSubmit={handleSubmit}>
                <div className=" form-group text-center mt-2">
                  <label className="mr-2" htmlFor="name">Email:</label>
                  <input 
                    type="text"
                    value={email_address}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="mr-2 ml-2" htmlFor="name">Password:</label>
                  <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="text-center">
                  <button className="btn btn-primary mt-3 mb-3" type="submit">Login</button>
                </p>
                <br></br>
                <br></br>  
              </form>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Login



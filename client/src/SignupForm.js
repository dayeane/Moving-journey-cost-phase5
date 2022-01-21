import React, { useState } from "react";
// import { Link } from "react-router-dom";

function SignupForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/signup", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setUser(user);
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card mt-2 " style={{borderRadius:"10px", fontFamily:"dosis"}}>
            <div className="card-header bg-primary" style={{color:"white"}}>
            <h3 className="text-center">New User?</h3>
            </div>
            <h5 className="text-center mt-2" >Create Account:</h5>
            <form onSubmit={handleSubmit}>
              <div className="col-12">
                <label className="col-6 text-right" htmlFor="name">Name:</label>
                <input
                  className="col-3"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12">
                <label className="col-6 text-right" htmlFor="email_address">Email:</label>
                <input
                  className="col-3"
                  type="email"
                  required="email"
                  name="email_address"
                  value={formData.email_address}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12">
                <label className="col-6 text-right" htmlFor="password">Password:</label>
                <input
                  className="col-3"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-12">
                <label className="col-6 text-right" htmlFor="password">Password Confirmation: </label>
                <input
                  className="col-3"
                  type="password"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={(e) => handleChange(e)}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary mt-3 mb-3" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;

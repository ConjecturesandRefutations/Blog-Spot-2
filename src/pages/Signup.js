import React from "react";

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import ClipLoader from "react-spinners/ClipLoader";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function Signup(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
  
    setLoading(true);
  
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        axios.post(`${API_URL}/auth/login`, { email, password, name })
          .then((response) => {
            storeToken(response.data.authToken);
            authenticateUser();
            navigate("/");
          })
          .catch((error) => {
            console.log("Failed to log in user after sign up: ", error);
            setErrorMessage("Failed to log in user after sign up");
          });
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (

    <div className="login">

    {loading ? <ClipLoader color="#36d7b7" className="clipLoader"/> : null}


    <div className="login-card">

      <h1>Blog Spot</h1>
      <h2>Signup</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleEmail} placeholder="email"/>
        <input type="password" name="password" value={password} onChange={handlePassword} placeholder="password"/>
        <input type="text" name="name" value={name} onChange={handleName}  placeholder="name" />
        { errorMessage && <p className="error-message">{errorMessage}</p> }
        <p className="loginSignup">Already Have an Account?</p>
        <a href="/">Login</a>
        <button href="#" className='loginBtn'>SIGNUP</button>
      </form>
</div>
</div>

  );
}

export default Signup;

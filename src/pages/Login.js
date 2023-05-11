import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import ClipLoader from "react-spinners/ClipLoader";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);


  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    setLoading(true);

    axios.post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/homepage");
      })
      .catch((error) => {
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
      .finally(() => {
        // Set loading state back to false
        setLoading(false);
      });
  };

  return (
    
    <div className="login">

    {loading ? <ClipLoader color="#36d7b7" className="clipLoader"/> : null}


    <div className="login-card">
      <h1>Blog Spot</h1>
      <h2>Login</h2>
      <h3>Enter your details</h3>
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <input type="email" name="email" value={email} onChange={handleEmail} placeholder="email" />
        <input type="password" name="password" value={password} onChange={handlePassword} placeholder="password"/>
        { errorMessage && <p className="error-message">{errorMessage}</p> }
        <p className="loginSignup">Don't have an account?</p>
        <a href="/signup">Signup</a>
        <button href="#" className='loginBtn'>LOGIN</button>
      </form>
</div>
</div>

  );
}

export default Login;

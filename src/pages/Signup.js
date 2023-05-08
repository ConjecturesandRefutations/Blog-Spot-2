import React from "react";

function Signup() {
  return (
    <div className="login">
    <div className="login-card">
      <h1>Blog Spot</h1>
      <h2>Signup</h2>
      <h3>Enter your details</h3>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p className="loginSignup">Already Have an Account?</p>
        <a href="/">Login</a>
        <button href="#" className='loginBtn'>SIGNUP</button>
      </form>
</div>
</div>

  );
}

export default Signup;

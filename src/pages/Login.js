import React from "react";

function Login() {
  return (
    <div className="login">
    <div className="login-card">
      <h1>Blog Spot</h1>
      <h2>Login</h2>
      <h3>Enter your details</h3>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <p className="loginSignup">Don't have an account?</p>
        <a href="/signup">Signup</a>
        <button href="#" className='loginBtn'>LOGIN</button>
      </form>
</div>
</div>

  );
}

export default Login;

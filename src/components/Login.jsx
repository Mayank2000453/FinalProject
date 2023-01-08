import React from "react";


function Login() {
  return (  <div>
   <form id="signup-form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" required/>
      <input type="email" placeholder="Email" required/>
      <input type="password" placeholder="Password" required/>
      <button type="submit">Sign Up</button>
      <div class="switch">
        <input type="checkbox" id="login-switch"/>
        <label for="login-switch">Already have an account?</label>
        <button type="submit">Sign Up</button>
      </div>
    </form>
</div>
  );
}

export default Login;
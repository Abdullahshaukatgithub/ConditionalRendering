import React from "react";

function Login(props) {
  return (
    <form className="form">
      <input type={props.type} placeholder={props.placeholder} />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;

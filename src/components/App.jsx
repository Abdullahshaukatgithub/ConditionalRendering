import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
      {/* {userIsRegistered ? (
        <Login Input type="text" placeholder="Username" />
      ) : (
        <Form />
      )} */}
    </div>
  );
}

export default App;

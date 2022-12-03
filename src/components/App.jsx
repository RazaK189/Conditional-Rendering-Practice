import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return (
    //<div className="container">{userIsRegistered ? <Login /> : <Form />}</div> method 1
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

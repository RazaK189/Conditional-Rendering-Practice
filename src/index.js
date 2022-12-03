import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.

//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.

// 2 methods for this
// Methods 1: create a sperate login jsx file and set ternary operator to either display
//Login  file or Regoster(form) using ternary operator

//method 2: add teranry operator to button to show either login or register depending on the value
//of isUserRegisterd
//use && to show confirm password or not

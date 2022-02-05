import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AddCustomer from "./components/customers/AddCustomer";
import CustomerList from "./components/customers/CustomerList";
import Navigation from "./components/nav/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default withAuthenticator(App);

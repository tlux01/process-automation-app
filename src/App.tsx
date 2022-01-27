import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import AddCustomer from "./AddCustomer";
import CustomerList from "./CustomerList";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <AddCustomer />
      <CustomerList />
    </div>
  );
}

export default withAuthenticator(App);

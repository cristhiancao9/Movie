import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Card from "./components/Card";
function App() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <div className="card">
        <Card></Card>
      </div>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

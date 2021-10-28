import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Card from "./components/Card";
/* import Home from "./components/Home"; */
import Home from "./components/Home";
function App() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <Switch>
        <Route path="/Home" component={Home}></Route>
        <Route path="/card" component={Card}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

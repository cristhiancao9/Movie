import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Card from "./components/Card";
import Home from "./components/Home";
import "../src/components/Card.css";
import { Redirect } from "react-router";
/* import { useState, useEffect } from "react"; */

function App() {
  /*   const [mov, setMov] = useState("");
  useEffect(() => {
    const movie = names.map((move) =>
      fetch(
        `http://www.omdbapi.com/?apikey=2b9c4287&s=${move}&type=movie`
      ).then((response) => response.json())
    );

    Promise.all(movie).then((value) => {
      setMov(value);
    });
  }, []); */
  return (
    <React.Fragment>
      <Nav></Nav>
      <Redirect to="/home" />
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/card" component={Card}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

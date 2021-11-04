import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Card from "./components/Card";
import Home from "./components/Home";
import Kids from "./components/Kids";
import Movie from "./components/Movie";
import "../src/components/Card.css";
import { Redirect } from "react-router";
import Comics from "./components/Comics";

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
        <Route path="/home" component={Home} />
        <Route path="/kids" component={Kids} />
        <Route path="/comics" component={Comics} />
        <Route path="/movie/:id" component={Movie} />
        <Route path="/card" component={Card} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Card from "./components/Card";
import Home from "./components/Home";
import "../src/components/Card.css";
import { useState, useEffect } from "react";

const names = [
  "nemo",
  "cars",
  /*   "madagascar",
  "toy story",
  "lego",
  "minions",
  "spider man",
  "jungle",
  "iron+man",
  "police",
  "box",
  "origen",
  "live",
  "job",
  "jurassic",
  "isla",
  "dad",
  "bomb", */
];
function App() {
  const [mov, setMov] = useState("");

  useEffect(() => {
    const movie = names.map((move) =>
      fetch(
        `http://www.omdbapi.com/?apikey=2b9c4287&s=${move}&type=movie`
      ).then((response) => response.json())
    );

    Promise.all(movie).then((value) => {
      setMov(value);
    });
  }, []);

  /* names.forEach((mov, i) => {
    movie.push(
      fetch(
        `http://www.omdbapi.com/?apikey=2b9c4287&s=${names[i]}&type=movie`
      ).then((response) => response.json())
    );
    Promise.all(movie).then((value) => setMov(value));
  }); */
  /* 
  Promise.all(movie).then((value) => setMov(value)); */
  /*   console.log(mov); */
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

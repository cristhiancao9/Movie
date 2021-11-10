import React from "react";
import { connect } from "react-redux";
import { getComics } from "../actions/index";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Card.css";
function Comics(props) {
  useEffect(() => {
    document.body.style.background = "#6f6fb8";
  });
  function removeDuplicates(originalArray, prop) {
    var newArray3 = [];
    var lookupObject3 = {};

    for (var i in originalArray) {
      lookupObject3[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject3) {
      newArray3.push(lookupObject3[i]);
    }
    return newArray3;
  }
  var uniqueArray3 = removeDuplicates(props.comics, "Title");

  function aleatorio(array) {
    array.sort(() => Math.random() - 0.6);
  }
  aleatorio(props.comics);
  return (
    <React.Fragment>
      <div className="contenedor_botones ">
        <NavLink className="Nav-link" to="/kids">
          <input className="boton" type="submit" value="Kids"></input>
        </NavLink>
        <NavLink className="Nav-link" to="/comics">
          <input className="boton" type="submit" value="Comics"></input>
        </NavLink>
      </div>
      {props.comics.length < 1 ? props.getComics() : null}
      <div className="main">
        {props.comics &&
          uniqueArray3
            .filter(
              (e) =>
                e.Poster !== "N/A" &&
                e.Title !== "Island of Lemurs: Madagascar" &&
                e.Title !== "Madagascar, carnet de voyage" &&
                e.Title !==
                  "The Penguins of Madagascar - Operation: Get Ducky" &&
                e.Title !== "Toy Story 3 in Real Life" &&
                e.Title !== "Toy Story 3" &&
                e.Title !== "Riding in Cars with Boys" &&
                e.Title !== "Two Cars, One Night" &&
                e.Title !== "Stealing Cars" &&
                e.Title !== "Bikes vs Cars" &&
                e.Title !== "A Lego Brickumentary" &&
                e.Title !==
                  "Scott Adams Talks About How Deep State Minions Spinning Indictment of 13 Russian" &&
                e.Title !== "Dark Minions" &&
                e.Title !== "Game of Minions"
            )
            .map((e) => (
              <div key={e.imdbID} className="contenedor-card">
                <img className="img_poster" src={e.Poster} alt="" />
                <div className="contenedor-boton-play">
                  <NavLink to={`/movie/${e.imdbID}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-player-play"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#ffffff"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 4v16l13 -8z" />
                    </svg>
                  </NavLink>
                </div>
                <div className="title-year">
                  <span className="title-cards"> {e.Title} </span>
                  <span className="year-cards">{`(${e.Year})`} </span>
                </div>
              </div>
            ))}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  comics: state.comics,
});
function mapDispatchToProps(dispatch) {
  return {
    getComics: () => dispatch(getComics()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Comics);

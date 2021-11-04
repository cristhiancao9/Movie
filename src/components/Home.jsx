import React from "react";
import { connect } from "react-redux";
import { getHome } from "../actions/index";
import "./Card.css";
import "./Home.css";
import { NavLink } from "react-router-dom";
function Home(props) {
  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  var uniqueArray = removeDuplicates(props.homes, "Title");

  function aleatorio(array) {
    array.sort(() => Math.random() - 0.6);
  }
  aleatorio(props.homes);
  return (
    <React.Fragment>
      <div className="linea-stilo"></div>
      <div className="contenedor_botones ">
        <NavLink className="Nav-link" to="/kids">
          <input className="boton" type="submit" value="Kids"></input>
        </NavLink>
        <NavLink className="Nav-link" to="/comics">
          <input className="boton" type="submit" value="Comics"></input>
        </NavLink>
      </div>

      {props.homes.length < 1 ? props.getHome() : null}
      <div className="main">
        {props.homes &&
          uniqueArray
            .filter((e) => e.Poster !== "N/A")
            .map((e) => (
              <div key={e.imdbID} className="contenedor-card">
                <img className="img_poster" src={e.Poster} alt="" />
                <div className="contenedor-boton-play">
                  <NavLink to={`/movie/${e.imdbID}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-player-play"
                      width="34"
                      height="28"
                      viewBox="0 0 23 21"
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
  homes: state.homes,
});

function mapDispatchToProps(dispatch) {
  return {
    getHome: () => dispatch(getHome()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

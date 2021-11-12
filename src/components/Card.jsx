import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./Card.css";

function Card(props) {
  useEffect(() => {
    document.body.style.background = "#333333";
    /* document.body.style.background = "#6f6fb8"; */
  });
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
      <div className="main">
        {props.moviesLoaded &&
          props.moviesLoaded
            .filter((e) => e.Poster !== "N/A")
            .map((e, i) => (
              <div key={i} className="contenedor-card">
                <img className="im" src={e.Poster} alt="" />
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
                  <div>
                    <span className="title-cards"> {e.Title} </span>
                  </div>
                  <div>
                    <span className="year-cards">{`(${e.Year})`} </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => ({
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(Card);

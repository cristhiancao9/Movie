import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Card.css";

function Card(props) {
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

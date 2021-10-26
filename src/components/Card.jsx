import React from "react";
import { connect } from "react-redux";

import "./Card.css";

function Card(props) {
  return (
    <React.Fragment>
      <div className="main">
        {props.moviesLoaded &&
          props.moviesLoaded
            .filter((e) => e.Poster !== "N/A")
            .map((e, i) => (
              <div key={i} className="contenedor-card">
                <img className="im" src={e.Poster} alt="" />
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
  moviesLoaded: state.moviesLoaded,
});

export default connect(mapStateToProps, null)(Card);

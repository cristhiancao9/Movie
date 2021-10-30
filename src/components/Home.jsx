import React from "react";
import { connect } from "react-redux";

import "./Card.css";

function Home(props) {
  /*   props.homes && console.log(props.homes[0]); */
  /*   console.log(props.homes); */
  return (
    <React.Fragment>
      <div className="main">
        {props.homes &&
          props.homes
            .filter((e) => e.Poster !== "N/A")
            .map((e) => (
              <div key={e.imdbID} className="contenedor-card">
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
  homes: state.homes,
});

export default connect(mapStateToProps, null)(Home);

import React from "react";
import { connect } from "react-redux";
import { getHome } from "../actions/index";
import "./Card.css";

function Home(props) {
  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
      console.log(lookupObject[originalArray[i][prop]]);
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
      {props.homes.length < 1 ? props.getHome() : null}
      <div className="main">
        {props.homes &&
          uniqueArray
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

function mapDispatchToProps(dispatch) {
  return {
    getHome: () => dispatch(getHome()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

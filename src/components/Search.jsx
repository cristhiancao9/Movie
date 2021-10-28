import React from "react";
import "./Search.css";
import { useState } from "react";
import { connect } from "react-redux";
import { getMovie } from "../actions/index.js";
import { useHistory } from "react-router-dom";
function Search(props) {
  const [searchMovie, setSearchMovie] = useState("");
  let history = useHistory();
  function handleChange(e) {
    e.preventDefault();
    setSearchMovie(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.getMovie(searchMovie);
    history.push("/card");
  }
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="search-principal">
          <input
            className="stilo-search"
            type="text"
            placeholder="Buscar Peliculas..."
            value={searchMovie}
            onChange={(e) => handleChange(e)}
          />
          <button className="btn-search" type="submit">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    getMovie: (searchMovie) => dispatch(getMovie(searchMovie)),
  };
}
export default connect(null, mapDispatchToProps)(Search);

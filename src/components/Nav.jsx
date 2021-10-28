import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import img from "../img/pal1.svg";
import Search from "./Search";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getHome } from "../actions/index";
function Nav(props) {
  let history = useHistory();
  return (
    <div className="nav-bg">
      <div className="nav-principal">
        <NavLink
          to="/Home"
          className="titulo"
          onClick={() => {
            props.getHome();
            history.push("/Home");
          }}
        >
          <div className="img-titulo">
            <img src={img} alt="" className="img" />
            <h1>Movies</h1>
          </div>
        </NavLink>
        <div className="search">
          <Search></Search>
        </div>
      </div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    getHome: () => dispatch(getHome()),
  };
}
export default connect(null, mapDispatchToProps)(Nav);

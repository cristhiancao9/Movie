import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import img from "../img/pal1.svg";
import Search from "./Search";
export default function Nav() {
  return (
    <div className="nav-bg">
      <div className="nav-principal">
        <NavLink to="/" className="titulo">
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

import React from "react";
import classes from './Header.module.css'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={classes.header}>
      <h2>FUTURAMA</h2>
      <nav className={classes.header_nav}>
        <NavLink to={"/"}>Сreators</NavLink>
        <NavLink to={"/cast"}>Cast</NavLink>
        <NavLink to={"/episodes"}>Episodes</NavLink>
        <NavLink to={"/character"}>Character</NavLink>
      </nav>
    </header>
  );
}

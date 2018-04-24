import React from 'react';
import "./Navbar.css";

const Navbar = props => (
        <nav className="navbar dark-purple">
            <a className="navbar-brand" href="/">Clicky Game</a>
            <a>Click an image to begin!</a>
            <a className="scores">Score: {props.score} | Top Score: {props.topScore}</a>
        </nav>
)

export default Navbar;
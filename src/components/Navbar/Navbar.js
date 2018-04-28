// IMPORTS
import React from 'react';
import "./Navbar.css";
// PROPS: Navbar
const Navbar = props => (
    <nav className="navbar light-yellow">
        <div className="burger-image"></div>
        <div className="message">{props.message}</div>
        <div>Score: {props.score} | Top Score: {props.topScore}</div>
    </nav>
)
// EXPORT DEFAULT: Navbar
export default Navbar;
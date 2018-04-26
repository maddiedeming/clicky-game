// IMPORTS
import React from 'react';
import "./Navbar.css";
// PROPS: Navbar
const Navbar = props => (
    <nav className="navbar light-yellow">
        <div className="">Score: {props.score}</div>
        <div className="burger-image"></div>
        <div className="">Top Score: {props.topScore}</div>
    </nav>
)
// EXPORT DEFAULT: Navbar
export default Navbar;
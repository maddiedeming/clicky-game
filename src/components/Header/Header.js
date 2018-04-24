import React from 'react';
import "./Header.css";

const Header = props => (
        <header className="header">
            <h1 className="title">Clicky Game!</h1>
            <h2 className="intro">Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
)

export default Header;
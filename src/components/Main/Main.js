// IMPORTS
import React from 'react';
import "./Main.css";
// PROPS: Main
const Main = props => (
    <main className={`container ${props.shake}`}>
        {props.children}
    </main>
)
// EXPORT DEFAULT: Main
export default Main;
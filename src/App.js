import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import cards from "./cards.json";
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component{
    
    state = {
        cards,
        score: 0,
        topScore: 0
    };
    
    render(){
        return(
            <div className="app">
                <Navbar score={this.state.score} topScore={this.state.topScore}>Clicky Game</Navbar>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    };

}

export default App;
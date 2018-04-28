// IMPORTS
import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
import Navbar from '../Navbar/Navbar.js';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Card from '../Card/Card.js';
////////////////////////////////////////////////////////////
import cards from '../../assets/json/cards.json';
import soundCorrect from '../../assets/sounds/alright.mp3';
import soundIncorrect from '../../assets/sounds/omg.mp3';
// CLASS: App
class App extends Component{
// STATE    
    state = {
        cards,
        score: 0,
        topScore: 0,
        selected: [],
        soundURL: "",
        soundPosition: 0,
        soundStatus: Sound.status.PAUSED,
        shake: "",
        message: "Select an image to begin!"
    };
// ON CLICK: SHUFFLE CARDS
    shuffle = id => {
        this.setState({
            cards: this.state.cards.sort(function(a,b){
                    return 0.5 - Math.random();
                }
            )
        })
    }
// ON CLICK: INCREMENT COUNT ON CARD
    incrementClick = id => {
        let ids = this.state.selected
        const incorrect = ids.includes(id);
        this.setState({soundPosition: 0, soundStatus: Sound.status.PLAYING,soundURL: ""});
        if(!incorrect){
            this.state.selected.push(id);
            let newScore = this.state.score + 1;
            this.setState({score: newScore});
            if(newScore === 12){
                this.setState({
                    score: 0,
                    selected: [],
                    topScore: newScore, 
                    soundURL: soundCorrect,
                    message: "You win!"
                });
            }
            else if(newScore > this.state.topScore){
                this.setState({
                    topScore: newScore, 
                    soundURL: soundCorrect,
                    message: "You guessed correctly!"
                });
            }
            else{
                this.setState({
                    soundURL: soundCorrect,
                    message: "You guessed correctly!"
                });
            }
        }
        else{
            this.setState({
                score: 0,
                selected: [], 
                soundURL: soundIncorrect,
                shake: "incorrect",
                message: "You guessed incorrectly!"
            });
            setTimeout(function(){ 
                this.setState({ shake: "" }); 
            }.bind(this), 1000);
        }
    };
// RENDER 
    render(){
        return(
            <div className="app">
                <Navbar
                    message={this.state.message} 
                    score={this.state.score} 
                    topScore={this.state.topScore} 
                />
                <Header/>
                <Main shake={this.state.shake}>
                    {this.state.cards.map((cards,i) => (
                        <Card 
                            id={cards.id} 
                            image={cards.image} 
                            key={i} 
                            increment={this.incrementClick} shuffle={this.shuffle}
                        />
                    ))}
                </Main>
                <Sound 
                    autoLoad={true} 
                    url={this.state.soundURL} 
                    playStatus={this.state.soundStatus} 
                    playPosition={this.state.soundPosition}
                />
                <Footer/>
            </div>
        );
    };
}
// EXPORT DEFAULT: App
export default App;

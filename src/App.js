import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Main from './components/Main';
import Marketplace from './components/Marketplace';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreMultiplier: 1,
            score: 0
        }
    }

    incrementScore = (amount) => {
        this.setState({
            score: this.state.score + amount
        })
    };

    render() {
        const {score, scoreMultiplier} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Main score={score} scoreMultiplier={scoreMultiplier} incrementScore={this.incrementScore}/>
                <Marketplace/>
            </div>
        );
    }
}

export default App;

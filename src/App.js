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
            scoreIncrementAmount: 1,
            score: 0
        }
    }

    incrementScore = (amount) => {
        this.setState({
            score: this.state.score + amount
        })
    };

    setScoreIncrement = (newAmount) => {
        this.setState({
            scoreIncrementAmount: newAmount
        })
    };

    render() {
        const {score, scoreIncrementAmount} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Main score={score} scoreIncrementAmount={scoreIncrementAmount} incrementScore={this.incrementScore}/>
                <Marketplace setScoreIncrement={this.setScoreIncrement}/>
            </div>
        );
    }
}

export default App;

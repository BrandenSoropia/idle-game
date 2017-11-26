import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Main from './components/Main';
import Marketplace from './components/Marketplace';
import PurchasedItems from "./components/PurchasedItems";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            perSecondScoreIncrement: 1,
            score: 0,
            purchasedItems: {
                item: 0
            }
        }
    }

    incrementScore = (amount) => {
        this.setState((prevState) => {
            return { score: prevState.score + amount };
        })
    };

    deductFromScore = amount => {
        this.setState((prevState) => {
            return { score: prevState.score - amount };
        })
    };

    increaseScorePerSecondIncrement = (increaseAmount) => {
        this.setState((prevState) => {
            return { perSecondScoreIncrement: prevState.perSecondScoreIncrement + increaseAmount }
        })
    };

    /**
     * Add or remove amount of items with itemName.
     * @param itemName
     * @param amount, an positive or negative int
     */
    updateItemAmount = (itemName, amount) => {
        this.setState((prevState) => {
            const result = { purchasedItems: {
                item: prevState.purchasedItems[itemName] + amount
                }
            };
            console.log(result)
            return result;
        })
    };

    render() {
        const {score, perSecondScoreIncrement, purchasedItems} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <PurchasedItems purchasedItems={purchasedItems}/>
                <Main
                    score={score}
                    perSecondScoreIncrement={perSecondScoreIncrement}
                    incrementScore={this.incrementScore}
                />
                <Marketplace
                    score={score}
                    increaseScorePerSecondIncrement={this.increaseScorePerSecondIncrement}
                    deductFromScore={this.deductFromScore}
                    updateItemAmount={this.updateItemAmount}
                />
            </div>
        );
    }
}

export default App;

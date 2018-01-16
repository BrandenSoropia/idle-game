import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Main from './components/Main';
import Marketplace from './components/Marketplace';
import Inventory from "./components/Inventory";

class App extends Component {
    constructor(props) {
        super(props);
        // Game state
        this.state = {
            perSecondScoreIncrement: 1,
            score: 0,
            inventory: {}
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

    setInventory = (inventory) => {
        this.setState(() => {
            return { inventory }
        })
    };

    /**
     * Add or remove amount of items with itemName.
     * @param itemName
     * @param amount, an positive or negative int. If negative, it reduces the amount of that item!
     */
    updateItemAmount = (itemName, amount) => {
        this.setState((prevState) => {
            // Handle case where item has never been bought yet
            let currentAmount = prevState.inventory.hasOwnProperty(itemName)
                ? prevState.inventory[itemName]
                : 0;

            // Update inventory of that item
            const result = prevState.inventory[itemName] = currentAmount + amount;

            return result;
        })
    };

    render() {
        const {score, perSecondScoreIncrement, inventory} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Inventory inventory={inventory} setInventory={this.setInventory}/>
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

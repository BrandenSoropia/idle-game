import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
    }

    /**
     * Start incrementing once component mounts.
     */
    componentDidMount() {
        this.incrementPerSecond();
    }

    /**
     * Clear increment once component unmounts.
     */
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    incrementPerSecond = () => {
        this.interval = setInterval(() => this.incrementScore(1), 1000);
    };

    incrementScore = (amount) => {
        this.setState({
            score: this.state.score + amount
        })
    };

    /**
     * Asynchronously add 1 whenever button is clicked
     */
    handleClick = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    };

    render() {
        return (
            <div>

                <div>
                    Count:&nbsp;
                    <span className={'score'}>{this.state.score}</span>
                </div>
                <button className={'increment-button'} onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default Main;
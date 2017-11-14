import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0
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
    componentDidUnmount() {
        clearInterval(this.interval);
    }

    incrementPerSecond = () => {
        this.interval = setInterval(() => this.incrementClicks(1), 1000);
    };

    incrementClicks = (amount) => {
        this.setState({
            clicks: this.state.clicks + amount
        })
    };

    /**
     * Asynchronously add 1 whenever button is clicked
     */
    handleClick = () => {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    };

    render() {
        return (
            <div>
                <span>Clicks: {this.state.clicks}</span>
                <button className={'increment-button'} onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default Main;
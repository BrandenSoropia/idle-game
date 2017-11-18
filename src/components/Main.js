import React, {Component} from 'react';

class Main extends Component {
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
        this.interval = setInterval(() => this.props.incrementScore(this.props.scoreMultiplier), 1000);
    };

    /**
     * Asynchronously add 1 whenever button is clicked
     */
    handleClick = () => {
        this.props.incrementScore(this.props.scoreMultiplier);
    };

    render() {
        return (
            <div>

                <div>
                    Count:&nbsp;
                    <span className={'score'}>{this.props.score}</span>
                </div>
                <button className={'increment-button'} onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default Main;
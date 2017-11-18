import React, { Component } from 'react';

class Marketplace extends Component {
    /**
     * Asynchronously set the increment amount.
     */
    setNewScoreIncrement = (newAmount) => {
      this.props.setScoreIncrement(newAmount);
    };

    render() {
        return (
            <div className={'marketplace'}>
                <span classname={'item'}>
                    Increment by 2!
                    <button className={'buy-button'} onClick={() => this.setNewScoreIncrement(2)}>Buy</button>
                </span>
            </div>
        )
    }
}

export default Marketplace;
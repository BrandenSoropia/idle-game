import React, {Component} from 'react';

class Marketplace extends Component {
    /**
     * Asynchronously set the increment amount.
     */
    buyItem = (itemCost, itemName, itemPerSecondIncrease) => {
        // TODO: Check if there is enough in score. Subtract, increase amount owned and apply score increase iff true. Otherwise reject
        if (!this.hasEnoughToPurchase(itemCost)) {// Do nothing if can't afford purchase
            console.log(`Sorry you can't afford purchasing ${itemName}!`);
            return;
        }
        this.props.deductFromScore(itemCost);
        this.props.updateItemAmount(itemName, 1);
        this.props.increaseScorePerSecondIncrement(itemPerSecondIncrease);
    };

    /**
     * Return true iff score is greater than price
     * @param price
     * @returns {boolean}
     */
    hasEnoughToPurchase = price => {
      return this.props.score >= price;
    };

    render() {
        return (
            <div className={'marketplace'}>
                <span className={'item'}>
                    Increment by 2!
                    <button className={'buy-button'} onClick={() => this.buyItem(5, 'item', 2)}>Buy</button>
                </span>
            </div>
        )
    }
}

export default Marketplace;
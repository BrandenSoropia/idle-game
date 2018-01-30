import React, {Component} from 'react';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Marketplace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: {}
        }
    }

    /**
     * Populate marketplace with data received from backend.
     */
    componentDidMount() {
        this.setMarketplaceItems();
    }

    /**
     * Save marketplace items in state.
     */
    setMarketplaceItems = () => {
        this.getMarketplaceItems()
            .then(items => { // Save items to state asynchronously
                this.setState(() => {
                    return { items }
                })
            })
            .catch(err => {
                console.log(err);
            });
    };

    /**
     * Return promise to get marketplace items from server.
     */
    getMarketplaceItems = () => {
        return fetch('http://localhost:3001/get_marketplace_items')
            .then(res => res.json())
            .then(json => {
                if (json.message) { // Report error if any
                    console.log(json.message);
                    return;
                }

                return json.marketplace_items;
            })
            .catch(err => {
                console.log(err);
            })
    };

    /**
     * Iff the user has enough funds, subtract from player funds, update player's inventory and apply score effects.
     * Otherwise do nothing.
     */
    buyItem = (itemCost, itemName, itemPerSecondIncrease) => {
        // Check if there is enough in score. Subtract, increase amount owned and apply score increase iff true. Otherwise reject
        if (!this.hasEnoughToPurchase(itemCost)) { // Do nothing if can't afford purchase
            console.log(`Sorry you can't afford purchasing ${itemName}!`);
            return;
        }
        this.props.deductFromScore(itemCost);
        this.props.updateItemAmount(itemName, 1);
        this.props.increaseScorePerSecondIncrement(itemPerSecondIncrease);
    };

    /**
     * Return true iff score is greater than price.
     * @param price
     * @returns {boolean}
     */
    hasEnoughToPurchase = price => {
      return this.props.score >= price;
    };

    render() {
        const { items } = this.state;

        let marketplaceItemElements;

        if (items) { // Only populate marketplace if items are not null
            marketplaceItemElements = Object.keys(items).map((itemName, idx) => {
                const { base_cost, per_second_score_amplifier } = items[itemName];

                return (
                    <span className={'item'} key={`item-${idx}`}>
                        {
                            // TODO: apply modifier to cost
                            `Increase increment by ${per_second_score_amplifier}!`
                        }
                        <button className={'buy-button'} key={`buy-button-${idx}`} onClick={() => this.buyItem(base_cost, itemName, per_second_score_amplifier)}>Buy</button>
                    </span>
                )
            });
        }

        return (
            <div className={'marketplace'}>
                {marketplaceItemElements}
            </div>
        )
    }
}

export default Marketplace;
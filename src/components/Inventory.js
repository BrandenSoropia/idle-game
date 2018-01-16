import React, {Component} from 'react';
import 'whatwg-fetch';

class Inventory extends Component {
    componentDidMount() {
        this.getMarketplaceItems()
            .then(items => {
                const inventory = {};

                for (let itemName in items) {
                    inventory[itemName] = 0;
                }

                this.props.setInventory(inventory);
            })
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

    generateInventoryElements = (inventory) => {
        const inventoryElements = [];

        for (let itemName in inventory) {
            if (inventory.hasOwnProperty(itemName)) {
                const item = (
                    <div className={'item'} key={`item-${itemName}`}>
                        <span className={'title'} key={`title-${itemName}`}>{itemName}</span>
                        <span className={'amount'} key={`amount-${itemName}`}>{inventory[itemName]}</span>
                    </div>
                );
                inventoryElements.push(item);
            }
        }

        return inventoryElements;
    };

    render() {
        const { inventory } = this.props;

        return (
            <div className={'inventory'}>
                {Object.keys(inventory).length === 0 ? null : this.generateInventoryElements(inventory)}
            </div>
        )
    };
}

export default Inventory;
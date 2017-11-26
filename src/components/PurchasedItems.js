import React, {Component} from 'react';

class PurchasedItems extends Component {
    render() {
        const itemName = 'item';
        return (
            <div className={'purchased-items'}>
                <div className={'purchased-item'}>
                    <span className={'item-name'}>{itemName}</span>
                    <span className={'item-amount'}>{this.props.purchasedItems[itemName]}</span>
                </div>
            </div>
        )
    }
}

export default PurchasedItems;
import React from 'react';
import PurchasedItems from './Inventory';
import { shallow } from 'enzyme';

describe('PurchasedItems test', () => {
    test('Test Purchased Items empty initial state', () => {
        const initialPurchasedItems = {
            'item': 0
        };
        const purchasedItemsWrapper = shallow(<PurchasedItems purchasedItems={initialPurchasedItems}/>);
        const items = purchasedItemsWrapper.find('span.item-name');

        expect(items.text()).toEqual('item');
    });
});
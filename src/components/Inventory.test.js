import React from 'react';
import Inventory from './Inventory';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Inventory test', () => {
    test('Test Inventory initial state', () => {
        const mockCallback = jest.fn();
        const initialInventory = {
            'item': 0
        };
        const inventoryWrapper = shallow(<Inventory inventory={initialInventory} setInventory={mockCallback}/>);
        const items = inventoryWrapper.find('span.item-name');

        expect(items.text()).toEqual('item');
    });
});
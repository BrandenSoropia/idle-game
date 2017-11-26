import React from 'react';
import Marketplace from './Marketplace';
import {shallow} from 'enzyme';

describe('Marketplace test', () => {
    test('if you can buy an item without enough points', () => {
        const mockFn = jest.fn();
        const app = shallow(<Marketplace
            score={0}
            deductFromScore={mockFn}
            updateItemAmount={mockFn}
            increaseScorePerSecondIncrement={mockFn}
        />);

        app.find('button.buy-button').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(0);
    });

    test('if you can buy an item with enough points', () => {
        const mockFn = jest.fn();
        const app = shallow(<Marketplace
            score={5}
            deductFromScore={mockFn}
            updateItemAmount={mockFn}
            increaseScorePerSecondIncrement={mockFn}
        />);

        app.find('button.buy-button').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(0);
    });
});
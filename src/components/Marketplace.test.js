import React from 'react';
import Marketplace from './Marketplace';
import {shallow, configure} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Marketplace test', () => {
    test('if you can buy an item without enough points', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<Marketplace
            score={0}
            deductFromScore={mockFn}
            updateItemAmount={mockFn}
            increaseScorePerSecondIncrement={mockFn}
        />);

        wrapper.setState({
            items: {
                'item1': {
                    'base_cost': 1,
                    'per_second_score_amplifier': 1
                }
            }
        });

        wrapper.find('button.buy-button').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(0);
    });

    test('if you can buy an item with enough points', () => {
        const mockFn = jest.fn();
        const wrapper = shallow(<Marketplace
            score={5}
            deductFromScore={mockFn}
            updateItemAmount={mockFn}
            increaseScorePerSecondIncrement={mockFn}
        />);

        wrapper.setState({
            items: {
                'item1': {
                    'base_cost': 1,
                    'per_second_score_amplifier': 1
                }
            }
        });

        wrapper.find('button.buy-button').simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(3);
    });
});
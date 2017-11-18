import React from 'react';
import Marketplace from './Marketplace';
import {shallow} from 'enzyme';

describe('Marketplace test', () => {
    test('Test set new increment score called', () => {
        const spy = jest.fn();

        const app = shallow(<Marketplace setScoreIncrement={spy}/>);

        app.find('button.buy-button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });
});
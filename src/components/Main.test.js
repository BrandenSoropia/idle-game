import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';

describe('Main test', () => {
    test('Test initial score is 0', () => {
        const main = shallow(<Main />);

        expect(main.state().score).toBe(0);
    });

    test('Test score increments by 1 on click without modifiers', () => {
        const main = shallow(<Main />);

        main.find('button.increment-button').simulate('click');

        expect(main.state().score).toBe(1);
    })
});
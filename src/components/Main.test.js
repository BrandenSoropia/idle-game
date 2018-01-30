import React from 'react';
import App from '../App';
import Main from './Main';
import {shallow, configure} from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Main test', () => {
    test('Test initial score is 0', () => {
        const app = shallow(<App/>);

        expect(app.find('Main').prop('score')).toBe(0);
    });

    test('Test clicking increment button, the increment score function is called', () => {
        const spy = jest.fn();
        const main = shallow(<Main score={0} incrementScore={spy}/>);

        main.find('button.increment-button').simulate('click');

        expect(spy).toHaveBeenCalledTimes(1);
    })
});
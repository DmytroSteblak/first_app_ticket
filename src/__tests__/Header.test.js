import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../components/Header';

describe('Testing component <Hader/>', () => {

    it('is the header displayed', () => {
        const header = shallow(<Header />);
        expect(toJson(header)).toMatchSnapshot();
    });
});

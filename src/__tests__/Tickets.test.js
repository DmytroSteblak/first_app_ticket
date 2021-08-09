import React from 'react';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';

import Ticket from '../components/Ticket';

const props = {
    price: '15400',
    duration: 1889,
    durationBack: 738,
    date: '2021-08-14T08:42:00.000Z',
    dateBack: '2021-09-03T06:59:00.000Z',
    stopsAmount: 2,
    stopsBackAmount: 3,
    origin: 'MOW',
    originBack: 'HKT',
    destination: 'HTK',
    destinationBack: 'MOW',
    stops: 'BKK',
    stopsBack: 'DBX,KUL'
};

describe('Testing component <Ticket />', () => {

    it('should render Ticket component with props', function () {
        const component = render(<Ticket {...props} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render Ticket component without props', function () {
        const component = render(<Ticket />);
        expect(toJson(component)).toMatchSnapshot();
    });
});
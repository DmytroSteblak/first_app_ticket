import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import TicketsList from '../components/TiketsList';

const actionState = [
    {
        price: 30546,
        carrier: 'S7',
        segments: [
            {
                origin: 'MOW',
                destination: 'HKT',
                date: '2021-04-24T02:20:00.000Z',
                stops: ['HKG', 'BKK', 'AUH'],
                duration: 1769,
            },
            {
                origin: 'HKT',
                destination: 'MOW',
                date: '2021-05-14T09:20:00.000Z',
                stops: [],
                duration: 1196,
            },
        ],
    },
]

const state = {
    searchId: '',
    tickets: [...actionState],
    loading: true,
    filterTickets: [...actionState],
}

let store;
const setUp = (state) => shallow(
    <Provider store={store}>
        <TicketsList {...state} />
    </Provider>);

describe('TicketsList Component', () => {

    it('should render component', () => {
        const mockStore = configureStore();
        store = mockStore(state);
        const ticketsList = setUp(state);
        expect(toJson(ticketsList)).toMatchSnapshot();
    });

});

import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';

import Filter from '../components/Filter';

const mockUseLocationValue = {
    pathname: '/testRoute',
    search: '',
    hash: '',
    state: null
}

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        useLocation: jest.fn().mockImplementation(() => {
            return mockUseLocationValue;
        })
    })
}));

describe('Testing component <Filter/>', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;
    let component;

    beforeAll(() => {
        store = mockStore(initialState);
        component = render(
            <Provider store={store}>
                <Filter />
            </Provider>
        );
    });

    it('should Search have be rendered correctly', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

});

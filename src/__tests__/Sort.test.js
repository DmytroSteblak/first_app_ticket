import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';

import Sort from '../components/Sort';

const props = {
    onClick: jest.fn()
}

let store, component;
beforeEach(() => {
    component = mount(
        <Provider store={store}>
            <Sort {...props} />
        </Provider>
    );
});

describe('Sort component', () => {
    const initialState = {};
    const mockStore = configureStore();
    store = mockStore(initialState);

    it('should render Sort component', () => {
        expect(toJson(component)).toMatchSnapshot();
    });

    it('should render two button',() => {
        const wrapper = component.find('ButtonComp');
        expect(wrapper.length).toBe(2);
    });

});
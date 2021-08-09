import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ButtonComp from '../components/ButtonComp';

const props = {
    children: 'test text',
    onClick: jest.fn()
}

describe('Button component <ButtonComp/>',function () {
    let wrapper, actionMock;

    beforeEach(() => {
        actionMock = jest.fn();
        wrapper = shallow(<ButtonComp action={actionMock}>Cancel</ButtonComp>);
    });

    it('should render ButtonComp component with props', function () {
        const component = shallow(<ButtonComp {...props} />);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('Test click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<ButtonComp onClick={mockCallBack}>Ok!</ButtonComp>));
        button.find('Button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
})
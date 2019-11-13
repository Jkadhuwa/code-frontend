import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import mockStore from '../_mocks_/store';
import Login from '../../components/auth/MainLogin';
import { mapStateToProps } from '../../components/auth/MainLogin';

const initialState = {};
const store = mockStore(initialState);
describe('LOGIN COMPONENT', () => {
  const props = {
    login: jest.fn(),
    email: '',
    password: '',
    isAuthenticated: null
  };
  it('Should start with email and password fields', () => {
    const wrapper = shallow(<Login  />);
    expect(wrapper.find('input')).toHaveLength(0);
  });
});

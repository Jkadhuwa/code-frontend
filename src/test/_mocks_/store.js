import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

export const mockStore = configureMockStore({ thunk });

export default mockStore;

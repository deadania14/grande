import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from './App';
const mockStore = configureStore([]);
 
describe('My Connected React-Redux Component', () => {
  let store;
 
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
  });
 
  it('should render with given state from Redux store', () => {
 
  });
 
  it('should dispatch an action on button click', () => {
 
  });
});

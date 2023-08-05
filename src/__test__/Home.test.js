// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      AllKats: {
        breedList: [
          { id: 1, name: 'Mock Cat 1', origin: 'Mock Origin 1' },
          { id: 2, name: 'Mock Cat 2', origin: 'Mock Origin 2' },
        ],
        loading: false,
        error: null,
      },
    });
  });

  it('should display loading when loading data', () => {
    store = mockStore({
      AllKats: {
        breedList: [],
        loading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });

  it('should display error message when there is an error', () => {
    store = mockStore({
      AllKats: {
        breedList: [],
        loading: false,
        error: 'Failed to fetch data',
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const errorText = screen.getByText('Failed to fetch data');
    expect(errorText).toBeInTheDocument();
  });
});


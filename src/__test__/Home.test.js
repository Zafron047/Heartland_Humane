import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../components/Home';

const customRender = (component) => render(
  <Provider store={store}>
    {component}
  </Provider>,
);

describe('Home', () => {
  it('render Home Components', () => {
    customRender(<Home />);
    expect(Home).toMatchSnapshot();
  });
});

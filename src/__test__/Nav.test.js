import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav', () => {
  it('renders Nav component correctly', () => {
    const { container } = render(
      <Router>
        <Nav />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});

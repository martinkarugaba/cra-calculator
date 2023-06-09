import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders the navigation links correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const homeLink = getByText('Home');
    const calculatorLink = getByText('Calculator');
    const quoteLink = getByText('Quote');

    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();

    expect(homeLink.getAttribute('href')).toBe('/');
    expect(calculatorLink.getAttribute('href')).toBe('/calculator');
    expect(quoteLink.getAttribute('href')).toBe('/quote');
  });
});

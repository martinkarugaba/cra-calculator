import React from 'react';
import { render } from '@testing-library/react';
import Error from '../Error';

describe('Error component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Error />);
    expect(container).toMatchSnapshot();
  });

  it('renders the error message correctly', () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText('There was an error!');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-5xl font-semibold');
  });
});

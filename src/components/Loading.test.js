import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it('renders the loading message correctly', () => {
    const { getByText } = render(<Loading />);
    const loadingMessage = getByText('Loading...');
    expect(loadingMessage).toBeInTheDocument();
    expect(loadingMessage).toHaveClass('text-5xl font-semibold');
  });
});

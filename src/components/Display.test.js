import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';
import { useGlobalContext } from '../context/context';

jest.mock('../context/context', () => ({
  useGlobalContext: jest.fn(),
}));

describe('Display component', () => {
  it('matches the snapshot', () => {
    useGlobalContext.mockReturnValue({
      result: {
        next: '123',
        total: '456',
      },
    });

    const { container } = render(<Display />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct display value', () => {
    useGlobalContext.mockReturnValue({
      result: {
        next: '123',
        total: '456',
      },
    });

    const { getByText } = render(<Display />);
    const displayValue = getByText('123');
    expect(displayValue).toBeInTheDocument();
    expect(displayValue).toHaveClass('text-4xl text-white font-medium');
  });
});

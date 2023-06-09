import React from 'react';
import { render } from '@testing-library/react';
import CalculatorApp from '../CalculatorApp';

jest.mock('../Display', () => {
  const Display = () => <div data-testid="display" />;
  Display.displayName = 'Display';
  return Display;
});

jest.mock('../Digits', () => {
  const Digits = () => <div data-testid="digits" />;
  Digits.displayName = 'Digits';
  return Digits;
});

jest.mock('../Operators', () => {
  const Operators = () => <div data-testid="operators" />;
  Operators.displayName = 'Operators';
  return Operators;
});

describe('CalculatorApp component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<CalculatorApp />);
    expect(container).toMatchSnapshot();
  });

  it('renders the child components correctly', () => {
    const { getByTestId } = render(<CalculatorApp />);
    const display = getByTestId('display');
    const digits = getByTestId('digits');
    const operators = getByTestId('operators');

    expect(display).toBeInTheDocument();
    expect(digits).toBeInTheDocument();
    expect(operators).toBeInTheDocument();
  });
});

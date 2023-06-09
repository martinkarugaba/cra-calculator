import React from 'react';
import { render } from '@testing-library/react';
import CalculatorApp from '../CalculatorApp';
import Display from '../Display';
import Digits from '../Digits';
import Operators from '../Operators';

jest.mock('../Display', () => () => <div data-testid="display" />);
jest.mock('../Digits', () => () => <div data-testid="digits" />);
jest.mock('../Operators', () => () => <div data-testid="operators" />);

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

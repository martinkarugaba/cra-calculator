import React from 'react';
import { render } from '@testing-library/react';
import Operators from './Operators';

jest.mock('../data/operators', () => [
  { id: 1, text: 'Operator 1' },
  { id: 2, text: 'Operator 2' },
  { id: 3, text: 'Operator 3' },
]);

jest.mock('./SingleButton', () => {
  return function MockSingleButton(props) {
    return (
      <div data-testid="single-button">
        {props.buttonName} - {props.basis} - {props.bg}
      </div>
    );
  };
});

describe('Operators component', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Operators />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct number of SingleButton components', () => {
    const { getAllByTestId } = render(<Operators />);
    const singleButtons = getAllByTestId('single-button');
    expect(singleButtons).toHaveLength(3);
  });

  it('passes the correct props to SingleButton components', () => {
    const { getAllByTestId } = render(<Operators />);
    const singleButtons = getAllByTestId('single-button');
    expect(singleButtons[0]).toHaveTextContent('Operator 1 - basis-1/3 - bg-orange-400');
    expect(singleButtons[1]).toHaveTextContent('Operator 2 - basis-1/3 - bg-orange-400');
    expect(singleButtons[2]).toHaveTextContent('Operator 3 - basis-1/3 - bg-orange-400');
  });
});

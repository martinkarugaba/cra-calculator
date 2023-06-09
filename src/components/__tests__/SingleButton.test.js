import React from 'react';
import { render } from '@testing-library/react';
import SingleButton from '../SingleButton';
import AppContext from '../../context/context';

describe('SingleButton component', () => {
  test('renders correctly', () => {
    const props = {
      buttonName: 'Test Button',
      basis: 'basis-class',
      bg: 'bg-class',
    };

    const { container } = render(
      <AppContext>
        <SingleButton
          buttonName={props.buttonName}
          basis={props.basis}
          bg={props.bg}
        />
      </AppContext>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

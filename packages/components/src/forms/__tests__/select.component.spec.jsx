import React from 'react';
import { shallow } from 'enzyme';

import Select from '../select.component';

describe('Select', () => {
  let props;

  beforeEach(() => {
    props = {
      input: {
        name: 'foo',
      },
      meta: {
        valid: true,
      },
      options: [
        ['foo', 'Foo'],
        ['bar', 'Bar'],
      ],
    };
  });

  const getWrapper = () => shallow(<Select {...props} />);

  it('should render with default props', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with specified props', () => {
    // Given
    props.label = 'bar';
    props.meta = {
      error: true,
      touched: true,
    };

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

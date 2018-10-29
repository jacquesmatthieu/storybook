import React from 'react';
import { shallow } from 'enzyme';

import Input from '../input.component';

describe('Input', () => {
  let props;

  beforeEach(() => {
    props = {
      input: {
        name: 'foo',
      },
      meta: {},
    };
  });

  const getWrapper = () => shallow(<Input {...props} />);

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
      valid: true,
    };

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render multi line input', () => {
    // Given
    props.multiLine = true;
    props.rows = 3;

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

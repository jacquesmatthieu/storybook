import React from 'react';
import { shallow } from 'enzyme';

import InputGroup from '../inputGroup.component';

describe('InputGroup', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'foo',
    };
  });

  const getWrapper = () => shallow(<InputGroup {...props}>Bar</InputGroup>);

  it('should render with default props', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with specified props', () => {
    // Given
    props.label = 'bar';

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

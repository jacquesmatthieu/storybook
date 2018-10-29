import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '../checkbox.component';

describe('Checkbox', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'foo',
    };
  });

  const getWrapper = () => shallow(<Checkbox {...props}>Bar</Checkbox>);

  it('should render with default props', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with specified props', () => {
    // Given
    props.selected = true;

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

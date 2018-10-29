import React from 'react';
import { shallow } from 'enzyme';

import ExpandButton from '../expandButton.component';

describe('ExpandButton', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const getWrapper = () => shallow(<ExpandButton {...props}>Foo</ExpandButton>);

  it('should render with default props', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with specified props', () => {
    // Given
    props.expanded = true;
    props.additionalProp = 'foo';

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

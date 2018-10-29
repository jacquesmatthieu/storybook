import React from 'react';
import { shallow } from 'enzyme';

import Button from '../button.component';

describe('Button', () => {
  let props;

  beforeEach(() => {
    props = {

    };
  });

  const getWrapper = () => shallow(<Button {...props}>Text</Button>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with given style', () => {
    // Given
    props.color = 'secondary';
    props.hollow = true;

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render link version', () => {
    // Given
    props.href = 'yolo';

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

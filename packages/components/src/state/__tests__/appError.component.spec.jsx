import React from 'react';
import { shallow } from 'enzyme';

import AppError from '../appError.component';

describe('AppError', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const getWrapper = () => shallow(<AppError {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with error details', () => {
    // Given
    props.error = new Error('Foo');
    props.error.stack = 'Awesome stack trace';

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

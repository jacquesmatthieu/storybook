import React from 'react';
import { shallow } from 'enzyme';

import DatePickerRange from '../datePickerRange.component';

describe('DatePickerRange', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const getWrapper = () => shallow(<DatePickerRange {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

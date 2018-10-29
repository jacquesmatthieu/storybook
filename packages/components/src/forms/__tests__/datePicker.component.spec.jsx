import React from 'react';
import { shallow } from 'enzyme';

import DatePicker from '../datePicker.component';

describe('DatePicker', () => {
  let props;

  beforeEach(() => {
    props = {
      input: {
        name: 'foo',
      },
      meta: {},
    };
  });

  const getWrapper = () => shallow(<DatePicker {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

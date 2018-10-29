import React from 'react';
import { shallow } from 'enzyme';

import MonthlyPageHeader from '../monthlyPageHeader.component';

describe('MonthlyPageHeader', () => {
  let props;

  beforeEach(() => {
    props = {
      steps: ['foo', 'bar'],
      date: '2018-11-09',
      onChange: jest.fn(),
    };
  });

  const getWrapper = () => shallow(<MonthlyPageHeader {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle previous month click', () => {
    // Given
    const wrapper = getWrapper();

    // When
    wrapper.find('IconButton').first().simulate('click');

    // Then
    expect(props.onChange).toHaveBeenCalledWith('2018-10');
  });

  it('should handle next month click', () => {
    // Given
    const wrapper = getWrapper();

    // When
    wrapper.find('IconButton').last().simulate('click');

    // Then
    expect(props.onChange).toHaveBeenCalledWith('2018-12');
  });
});

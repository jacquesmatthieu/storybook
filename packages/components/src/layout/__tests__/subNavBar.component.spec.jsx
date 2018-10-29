import React from 'react';
import { shallow } from 'enzyme';

import SubNavBar from '../subNavBar.component';

describe('SubNavBar', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const getWrapper = () => shallow(<SubNavBar {...props}>Children</SubNavBar>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

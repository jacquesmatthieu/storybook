import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from '../dropdown.component';

describe('Dropdown', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const getWrapper = () => shallow(<Dropdown {...props}>{({ open }) => `opened: ${open}`}</Dropdown>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle close', () => {
    // Given
    const wrapper = getWrapper();
    wrapper.setState({ open: true });

    // When
    wrapper.find('dropdowncomponent__DropdownClose').simulate('click');

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

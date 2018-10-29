import React from 'react';
import { shallow } from 'enzyme';

import MultiSelect from '../multiSelect.component';

describe('Dropdown', () => {
  let props;

  beforeEach(() => {
    props = {
      input: {
        value: ['foo'],
        name: 'foo',
        onChange: jest.fn(),
      },
      meta: {},
      options: [
        ['foo', 'Foo'],
        ['bar', 'Bar'],
      ],
    };
  });

  const getWrapper = () => shallow(<MultiSelect {...props} />);

  it('should render with default props', () => {
    // When
    const wrapper = getWrapper();
    const subWrapper = wrapper.find('multiSelectcomponent__WrapperDropdown')
      .renderProp('children', { open: false, toggle: jest.fn() });

    // Then
    expect(wrapper).toMatchSnapshot();
    expect(subWrapper).toMatchSnapshot();
  });

  it('should render with specified props', () => {
    // Given
    props.label = 'bar';
    props.meta = {
      error: true,
      touched: true,
      valid: true,
    };

    // When
    const wrapper = getWrapper();
    const subWrapper = wrapper.find('multiSelectcomponent__WrapperDropdown')
      .renderProp('children', { open: true, toggle: jest.fn() });

    // Then
    expect(wrapper).toMatchSnapshot();
    expect(subWrapper).toMatchSnapshot();
  });
});

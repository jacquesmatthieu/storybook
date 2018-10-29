import React from 'react';
import { shallow } from 'enzyme';

import AppBar from '../appBar.component';

describe('AppBar', () => {
  let props;

  beforeEach(() => {
    props = {
      currentAppName: 'foo',
      apps: [
        { id: 'foo', name: 'Foo', route: 'foo', color: '#foo', logo: 'foo' },
        { id: 'bar', name: 'Bar', route: 'bar', color: '#bar', logo: 'bar' },
      ],
      user: {
        firstName: 'foo',
        lastName: 'bar',
        profilePictureUrl: 'baz',
      },
    };
  });

  const getWrapper = () => shallow(<AppBar {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();
    const subWrapper = wrapper.find('appBarcomponent__AppSwitcher')
      .renderProp('children', { open: true, toggle: jest.fn() });

    // Then
    expect(wrapper).toMatchSnapshot();
    expect(subWrapper).toMatchSnapshot();
  });

  it('should render fixed version', () => {
    // Given
    props.fixed = true;

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

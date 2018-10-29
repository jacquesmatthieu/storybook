import React from 'react';
import { shallow } from 'enzyme';

import SubNavBarLink from '../subNavBarLink.component';

describe('SubNavBarLink', () => {
  let props;

  beforeEach(() => {
    props = {
      to: 'bar',
    };
  });

  const getWrapper = () => shallow(<SubNavBarLink {...props}>Foo</SubNavBarLink>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

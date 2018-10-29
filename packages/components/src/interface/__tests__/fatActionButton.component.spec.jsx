import React from 'react';
import { shallow } from 'enzyme';

import FatActionButton from '../fatActionButton.component';

describe('FatActionButton', () => {
  let props;

  beforeEach(() => {
    props = {
      icon: 'plus',
      text: 'Foo',
    };
  });

  const getWrapper = () => shallow(<FatActionButton {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

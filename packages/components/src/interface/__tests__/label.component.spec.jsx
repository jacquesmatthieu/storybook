import React from 'react';
import { shallow } from 'enzyme';

import Label from '../label.component';

describe('Label', () => {
  let props;

  beforeEach(() => {
    props = {
      color: 'foo',
    };
  });

  const getWrapper = () => shallow(<Label {...props}>Bar</Label>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../pageHeader.component';

describe('PageHeader', () => {
  let props;

  beforeEach(() => {
    props = {
      steps: ['foo', 'bar'],
      title: 'Foo',
    };
  });

  const getWrapper = () => shallow(<PageHeader {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

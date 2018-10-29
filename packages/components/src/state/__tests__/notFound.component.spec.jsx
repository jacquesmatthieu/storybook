import React from 'react';
import { shallow } from 'enzyme';

import NoFound from '../notFound.component';

describe('NoFound', () => {
  let props;

  beforeEach(() => {
    props = {
      steps: ['foo', 'bar'],
    };
  });

  const getWrapper = () => shallow(<NoFound {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

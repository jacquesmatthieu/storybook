import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from '../breadcrumb.component';

jest.mock('../../state/withCurrentApp.hoc', () => jest.fn(Comp => Comp));

describe('Breadcrumb', () => {
  let props;

  beforeEach(() => {
    props = {
      steps: ['foo', 'bar'],
      currentApp: { name: 'baz' },
    };
  });

  const getWrapper = () => shallow(<Breadcrumb {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

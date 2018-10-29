import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../loading.component';

jest.mock('../withCurrentApp.hoc', () => jest.fn(Comp => Comp));

describe('Loading', () => {
  let props;

  beforeEach(() => {
    props = {
      currentApp: { id: 'foo' },
    };
  });

  const getLoadingWrapper = () => shallow(<Loading {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getLoadingWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render error', () => {
    // Given
    props.error = 'foo';

    // When
    const wrapper = getLoadingWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

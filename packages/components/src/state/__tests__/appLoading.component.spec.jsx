import React from 'react';
import { shallow } from 'enzyme';

import AppLoading from '../appLoading.component';

describe('AppLoading', () => {
  let props;

  beforeEach(() => {
    props = {
      appId: 'foogere',
    };
  });

  const getAppLoadingWrapper = () => shallow(<AppLoading {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getAppLoadingWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from '../searchBar.component';

describe('SearchBar', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const getWrapper = () => shallow(<SearchBar {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

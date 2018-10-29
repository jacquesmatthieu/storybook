import React from 'react';
import { shallow } from 'enzyme';

import Modal from '../modal.component';

describe('Modal', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'Foo',
      open: true,
    };
  });

  const getWrapper = () => shallow(<Modal {...props}>Bar</Modal>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

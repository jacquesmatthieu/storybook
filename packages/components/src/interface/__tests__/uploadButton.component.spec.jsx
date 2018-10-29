import React from 'react';
import { shallow } from 'enzyme';

import UploadButton from '../uploadButton.component';

describe('UploadButton', () => {
  let props;

  beforeEach(() => {
    props = {
      text: 'foo',
      icon: 'folder',
      input: {
        name: 'bar',
        onChange: jest.fn(),
      },
    };
  });

  const getWrapper = () => shallow(<UploadButton {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with value', () => {
    // Given
    props.input.value = [{ name: 'hello' }];

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

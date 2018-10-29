import React from 'react';
import { shallow } from 'enzyme';

import Icon from '../icon.component';

describe('Icon', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'arrow',
      stroke: 'primary.main',
      theme: {
        palette: {
          primary: {
            main: 'rebeccapurple',
          },
        },
      },
    };
  });

  const getWrapper = () => shallow(<Icon {...props} />);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

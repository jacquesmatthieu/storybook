import React from 'react';
import { shallow } from 'enzyme';
import { urlResolver } from '@arborescence/common';

import Meta from '../meta.component';

describe('Meta', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'foo',
      pathname: '/bar',
    };

    urlResolver.set('baz', { path: '/bar', parents: ['foogere'] });
  });

  const getWrapper = () => shallow(<Meta {...props}>Foo</Meta>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with default app', () => {
    // Given
    props.pathname = '/hello';
    urlResolver.set('qux', { path: '/hello', parents: [] });

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no title prop', () => {
    // Given
    props.title = undefined;

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

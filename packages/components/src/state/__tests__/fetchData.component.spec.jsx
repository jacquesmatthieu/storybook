import React from 'react';
import { shallow } from 'enzyme';

import FetchData, { withFetchData } from '../fetchData.component';

describe('FetchData', () => {
  let props;

  beforeEach(() => {
    props = {
      query: { foo: 'bar' },
    };
  });

  const getWrapper = () => shallow((
    <FetchData {...props}>
      {data => JSON.stringify(data)}
    </FetchData>
  ));

  it('should render loading state', () => {
    // When
    const wrapper = getWrapper();
    const subWrapper = wrapper.find('Query').renderProp('children', { loading: true });

    // Then
    expect(wrapper).toMatchSnapshot();
    expect(subWrapper).toMatchSnapshot();
  });

  it('should render error state', () => {
    // When
    const wrapper = getWrapper();
    const subWrapper = wrapper.find('Query').renderProp('children', { error: true });

    // Then
    expect(subWrapper).toMatchSnapshot();
  });

  it('should render loaded state', () => {
    // When
    const wrapper = getWrapper();
    const subWrapper = wrapper.find('Query').renderProp('children', { data: { hello: 'world' } });

    // Then
    expect(subWrapper).toMatchSnapshot();
  });

  it('should render wrapped component wioth HOC', () => {
    // Given
    const WrappedComponent = () => <div>Foo</div>;
    const Comp = withFetchData({ foo: 'bar' })(WrappedComponent);

    // When
    const wrapper = shallow(<Comp />);
    const subWrapper = wrapper.find('FetchData').renderProp('children', { hello: 'world' });

    // Then
    expect(wrapper).toMatchSnapshot();
    expect(subWrapper).toMatchSnapshot();
  });
});

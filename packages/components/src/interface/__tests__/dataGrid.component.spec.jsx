import React from 'react';
import { shallow } from 'enzyme';

import { DataGrid, DataGridItem, DataGridRow } from '../dataGrid.component';

describe('DataGrid', () => {
  let props;

  beforeEach(() => {
    props = {
      columns: ['foo', 'bar', 'baz'],
      labels: ['hello', 'world'],
      rows: [42, 69],
    };
  });

  const getWrapper = () => shallow(<DataGrid {...props}>Foo</DataGrid>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

describe('DataGridRow', () => {
  let props;

  beforeEach(() => {
    props = {
      y: 42,
      h: 69,
    };
  });

  const getWrapper = () => shallow(<DataGridRow {...props}>Bar</DataGridRow>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

describe('DataGridItem', () => {
  let props;

  beforeEach(() => {
    props = {
      x: 1,
      w: 13,
      y: 42,
      h: 69,
    };
  });

  const getWrapper = () => shallow(<DataGridItem {...props}>Bar</DataGridItem>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

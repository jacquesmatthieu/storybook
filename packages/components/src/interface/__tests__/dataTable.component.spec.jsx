import React from 'react';
import { shallow } from 'enzyme';

import { DataTable, DataTableCell } from '../dataTable.component';

describe('DataTable', () => {
  const getWrapper = () => shallow(<DataTable>Foo</DataTable>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

describe('DataTableCell', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  const getWrapper = () => shallow(<DataTableCell {...props}>Bar</DataTableCell>);

  it('should render properly', () => {
    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });

  it('should render head version', () => {
    // Given
    props.head = true;
    props.inputProps = { foo: 'bar' };

    // When
    const wrapper = getWrapper();

    // Then
    expect(wrapper).toMatchSnapshot();
  });
});

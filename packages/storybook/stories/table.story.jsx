import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Table, TableRow, TableCell } from '@arborescence/components';
import { ExampleBox, StoryTitle } from './support/styledComponents';

const labels = [
  { sortingKey: 'firstName', displayText: 'First name' },
  { sortingKey: 'lastName', displayText: 'Last name' },
];
const data = [
  { firstName: 'Foo', lastName: 'Bar' },
  { firstName: 'Baz', lastName: 'Qux' },
];

class TableSortHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: 'firstName',
      sortDirection: 'desc',
    };
  }

  handleSortChange = (sortBy, sortDirection) => this.setState({ sortBy, sortDirection });

  render() {
    const { children: render } = this.props;
    return render(this.state, this.handleSortChange);
  }
}

TableSortHandler.propTypes = {
  children: PropTypes.func.isRequired,
};

export default () => (
  <Fragment>
    <StoryTitle>Table</StoryTitle>
    Table is a simple table component that allows to displays items in sorted/unsorted list.
    <ExampleBox>
      <Table labels={labels}>
        {data.map(row => (
          <TableRow key={row.firstName}>
            <TableCell>
              {row.firstName}
            </TableCell>
            <TableCell>
              {row.lastName}
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </ExampleBox>
    With sorting enabled:
    <ExampleBox>
      <TableSortHandler>
        {({ sortBy, sortDirection }, handleSortChange) => (
          <Table
            labels={labels}
            sortedBy={sortBy}
            sortDirection={sortDirection}
            sortEnabled
            onSortChange={handleSortChange}
          >
            {data.map(row => (
              <TableRow key={row.firstName}>
                <TableCell>
                  {row.firstName}
                </TableCell>
                <TableCell>
                  {row.lastName}
                </TableCell>
              </TableRow>
            ))}
          </Table>
        )}
      </TableSortHandler>
    </ExampleBox>
  </Fragment>
);

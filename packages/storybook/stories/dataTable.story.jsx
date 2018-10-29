import React, { Fragment } from 'react';
import {
  DataTable,
  DataTableCell,
  DataTableRow,
  DataTableBody,
  DataTableHead,
} from '@arborescence/components';

import { Spacer, StoryTitle } from './support/styledComponents';

const data = [
  ['Total', '', 1, 1, 1, 1, 1, '', '', 1, 1, 1, 1, 1],
  ['Project 1', '', '', '', 0.75, 'abs', 'abs', '', '', 'abs', 1, 1, 1, 1],
  ['Project 2', '', '/', '/', '', 'abs', 'abs', '', '', 'abs', '', '', '', ''],
];

export default () => (
  <Fragment>
    <StoryTitle>Data Table</StoryTitle>
    Data table is a complex table component that can render huge amount of data.
    <Spacer />
    <DataTable>
      <DataTableHead>
        <DataTableRow>
          <DataTableCell head cellProps={{ colSpan: data[0].length }}>Head</DataTableCell>
        </DataTableRow>
      </DataTableHead>
      <DataTableBody>
        {data.map((row, i) => (
          <DataTableRow spaced={i === 2} key={row[0]}>
            {row.map((value, j) => (
              // eslint-disable-next-line react/no-array-index-key
              <DataTableCell large={j === 0} key={j}>{value}</DataTableCell>
            ))}
          </DataTableRow>
        ))}
      </DataTableBody>
    </DataTable>
    <Spacer />
  </Fragment>
);

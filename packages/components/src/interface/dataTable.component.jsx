import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { condition, getColor, inRem } from '@arborescence/selectors';
import Typography from './typography.component';

const WrapperDataTable = styled.div`
  margin: 0 auto;
  border: solid 1px ${getColor('primary', 'main')};
  border-radius: ${inRem(0.6)};
  padding: ${inRem(1)};
  width: min-content;
  background-color: ${getColor('common', 'white')};
`;

const StyledDataTable = styled.table`
  border-collapse: collapse;
`;

export const DataTable = ({ children, ...props }) => (
  <WrapperDataTable>
    <StyledDataTable {...props}>
      {children}
    </StyledDataTable>
  </WrapperDataTable>
);

DataTable.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DataTableHead = styled.thead``;

export const DataTableBody = styled.tbody``;

const StyledCell = styled.td`
  padding: 0;
`;

const CellContent = styled(Typography.withComponent('div'))`
  display: flex;
  flex-direction: column;
  align-items: ${condition('large', 'flex-start', 'center')};
  justify-content: center;
  margin: ${inRem(0.2)};
  border-radius: ${inRem(0.4)};
  border: solid 1px ${getColor('grey', 'main')};
  padding-left: ${condition('large', inRem(3), '')};
  min-width: ${condition('large', inRem(23), inRem(8))};
  min-height: ${inRem(10)};
  background-color: ${condition('grey', getColor('grey', 'light'))};
  white-space: nowrap;
  font-weight: normal;
  box-sizing: border-box;
`;

export const DataTableRow = styled.tr`
  & ${CellContent} {
    margin-top: ${condition('spaced', inRem(1.6), '')};
  }
`;

const StyledHeadCell = StyledCell.withComponent('th');

export const DataTableCell = ({ head, children, cellProps, ...props }) => React.createElement(
  head ? StyledHeadCell : StyledCell,
  cellProps,
  (
    <CellContent variant="dataTable" {...props}>
      {children}
    </CellContent>
  ),
);

DataTableCell.defaultProps = {
  head: false,
  children: null,
  cellProps: undefined,
};

DataTableCell.propTypes = {
  head: PropTypes.bool,
  children: PropTypes.node,
  cellProps: PropTypes.shape({}),
};

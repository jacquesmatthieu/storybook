import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { condition, getColor, inRem } from '@arborescence/selectors';

import Typography from './typography.component';
import { AntiOverflow } from './tableRow.component';

const borderRadius = 1;

const BaseDataGridItem = styled(Typography.withComponent('div'))`
  grid-column-start: ${({ x }) => x + 1};
  grid-row-start: ${({ y }) => y + 2};
  grid-column-end: ${({ x, w }) => (typeof w === 'string' ? w : x + w + 1)};
  grid-row-end: ${({ y, h }) => (typeof h === 'string' ? h : y + h + 2)};
`;

const StyledDataGridItem = styled(BaseDataGridItem)`
  display: flex;
  align-items: center;
  padding: ${condition('dense', inRem(1.4), css`${inRem(3.7)} ${inRem(4)} ${inRem(3.1)}`)};
`;

export const DataGridItem = ({ className, x, y, w, h, dense, numeric, centered, children }) => (
  <StyledDataGridItem className={className} x={x} y={y} w={w} h={h} dense={dense} variant="table">
    <AntiOverflow numeric={numeric} centered={centered}>
      {children}
    </AntiOverflow>
  </StyledDataGridItem>
);

DataGridItem.defaultProps = {
  className: undefined,
  w: 1,
  h: 1,
  dense: undefined,
  numeric: undefined,
  centered: undefined,
  children: undefined,
};

DataGridItem.propTypes = {
  className: PropTypes.string,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  w: PropTypes.number,
  h: PropTypes.number,
  dense: PropTypes.bool,
  numeric: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
};

const StyledDataGridRow = styled(BaseDataGridItem)`
  grid-column-end: -1;
  border: solid 1px ${getColor('grey', 'main')};
  border-radius: ${inRem(borderRadius)};
  background-color: ${getColor('common', 'white')};
`;

const DataGridRowGap = styled(BaseDataGridItem)`
  height: ${inRem(1)};
`;

export const DataGridRow = ({ y, h, children, ...props }) => (
  <Fragment>
    <StyledDataGridRow
      x={0}
      y={y}
      h={h}
      {...props}
    />
    {children}
    <DataGridRowGap x={0} y={y + h} w={1} h={1} />
  </Fragment>
);

DataGridRow.propTypes = {
  y: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

const DataGridHeadItem = styled(BaseDataGridItem)`
  align-self: end;
  padding-left: ${inRem(4)};
  padding-bottom: ${inRem(1.5)};
`;

const StyledDataGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ theme, columns }) => columns.map(column => (
    typeof column === 'number' ? theme.spacing.inRem(column) : column
  )).join(' ')};
  grid-template-columns: ${({ theme, rows }) => rows.map(row => (
    typeof row === 'number' ? theme.spacing.inRem(row) : row
  )).join(' ')};
  align-items: stretch;
  justify-items: stretch;
  width: 100%;
  overflow-x: auto;
`;

export const DataGrid = ({ columns, rows, labels, children, ...props }) => (
  <StyledDataGrid columns={columns} rows={rows} {...props}>
    {labels.map((label, i) => (
      <DataGridHeadItem key={label} x={i} y={-1} w={1} h={1} variant="tableHead">
        {label}
      </DataGridHeadItem>
    ))}
    {children}
  </StyledDataGrid>
);

DataGrid.defaultProps = {
  rows: [],
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  rows: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

const Separator = styled(BaseDataGridItem)`
  border-radius: ${inRem(0.3)};
  background-color: ${getColor('background', 'separator')};
`;

export const DataGridVerticalSeparator = styled(Separator)`
  align-self: center;
  justify-self: end;
  width: ${inRem(0.6)};
  height: calc(100% - ${inRem(4)});
`;

export const DataGridHorizontalSeparator = styled(Separator)`
  position: relative;
  top: ${inRem(-0.3)};
  align-self: start;
  justify-self: stretch;
  height: ${inRem(0.6)};
`;

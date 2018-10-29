import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { inRem, getColor, condition } from '@arborescence/selectors';

import Typography from './typography.component';

const borderRadius = 1;
const getBorder = ({ theme }) => `solid 1px ${theme.palette.grey.main}`;

export const TableRow = styled.tr`
  vertical-align: bottom;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
`;

TableRow.defaultProps = {
  clickable: false,
};

TableRow.propTypes = {
  clickable: PropTypes.bool,
};

const TableCellDiv = styled(Typography.withComponent('div'))`
  display: flex;
  align-items: center;
  ${condition('dense', css`padding: ${inRem(1.4)} ${inRem(1.4)}`, css`padding: ${inRem(2.5)} ${inRem(4)}`)};
  background-color: ${getColor('common', 'white')};
  border-top: ${getBorder};
  border-bottom: ${getBorder};
  min-height: ${inRem(10)};
  box-sizing: border-box;
`;

export const AntiOverflow = styled.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${condition({
    numeric: 'right',
    centered: 'center',
    [condition.fallback]: 'left',
  })};
`;

const TableCellTd = styled.td`
  position: relative;
  padding: 0 0 ${inRem(0.6)};
  text-align: ${condition('numeric', 'right', 'left')};
  vertical-align: middle;

  &[data-separated="true"] {
    max-width: ${inRem(50)};
  }

  &[data-separated="true"] ${TableCellDiv} {
    margin-left: ${inRem(2)};
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &[data-separated="true"]::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: ${inRem(1)};
    height: calc(100% - ${inRem(1)});
    border: ${getBorder};
    border-left: none;
    border-top-right-radius: ${inRem(borderRadius)};
    border-bottom-right-radius: ${inRem(borderRadius)};
    background-color: ${({ theme }) => theme.palette.common.white};
  }

  &:first-child ${TableCellDiv},
  &[data-separated="true"] ${TableCellDiv} {
    border-left: ${getBorder};
    border-top-left-radius: ${inRem(borderRadius)};
    border-bottom-left-radius: ${inRem(borderRadius)};
  }

  &:last-child ${TableCellDiv} {
    border-right: ${getBorder};
    border-top-right-radius: ${inRem(borderRadius)};
    border-bottom-right-radius: ${inRem(borderRadius)};
  }
`;

export const TableCell = ({ separated, dense, numeric, children, ...props }) => (
  <TableCellTd data-separated={separated || undefined} {...props}>
    <TableCellDiv dense={dense} variant="table">
      <AntiOverflow numeric={numeric}>
        {children}
      </AntiOverflow>
    </TableCellDiv>
  </TableCellTd>
);

TableCell.defaultProps = {
  separated: false,
  dense: false,
  children: null,
  numeric: undefined,
};

TableCell.propTypes = {
  separated: PropTypes.bool,
  dense: PropTypes.bool,
  numeric: PropTypes.bool,
  children: PropTypes.node,
};

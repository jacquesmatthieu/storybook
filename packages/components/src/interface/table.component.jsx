import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { condition, inRem } from '@arborescence/selectors';

import Icon from '../icons/icon.component';
import Typography from './typography.component';

const TableStyled = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
`;

const TableHeadCell = styled.td`
  padding: 0 ${inRem(4)} ${inRem(1)};
  width: ${({ columnSize }) => (columnSize ? `${columnSize}%` : 'auto')};
  text-transform: uppercase;
  cursor: ${({ sortEnabled }) => (sortEnabled ? 'pointer' : '')};
  vertical-align: bottom;
  text-align: ${condition('numeric', 'right', 'left')};
`;

const SortIcon = styled(Icon)`
  display: inline-block;
  margin-left: ${inRem(1)};
`;

const handleSortChange = (oldKey, newKey, direction, onSortChange) => {
  const newDirection = direction === 'desc' ? 'asc' : 'desc';
  return () => onSortChange(newKey, oldKey === newKey ? newDirection : 'asc');
};

const Table = ({ labels, sortEnabled, sortedBy, sortDirection, onSortChange, children }) => (
  <TableStyled>
    <thead>
      <tr>
        {labels.map(({ sortingKey, displayText, size, numeric }) => (
          <TableHeadCell
            key={sortingKey || displayText}
            sortEnabled={sortEnabled && sortingKey}
            columnSize={size}
            numeric={numeric}
            onClick={
              (sortEnabled && sortingKey)
                ? handleSortChange(sortedBy, sortingKey, sortDirection, onSortChange)
                : undefined
            }
          >
            <Typography variant={sortingKey === sortedBy ? 'tableHeadActive' : 'tableHead'}>{displayText}</Typography>
            {sortedBy && sortingKey === sortedBy && (
              <SortIcon
                name="arrow"
                stroke="none"
                fill="secondary.main"
                direction={sortDirection === 'desc' ? 'down' : 'up'}
              />
            )}
          </TableHeadCell>
        ))}
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </TableStyled>
);

Table.defaultProps = {
  sortEnabled: false,
  sortedBy: null,
  sortDirection: 'asc',
  onSortChange() {},
};

Table.propTypes = {
  sortEnabled: PropTypes.bool,
  sortedBy: PropTypes.string,
  sortDirection: PropTypes.string,
  onSortChange: PropTypes.func,
  labels: PropTypes.arrayOf(PropTypes.shape({
    sortingKey: PropTypes.string,
    displayText: PropTypes.string.isRequired,
    size: PropTypes.number,
  })).isRequired,
  children: PropTypes.node.isRequired,
};

export default Table;

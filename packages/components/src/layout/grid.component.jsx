import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

let GridItem;
let GridLayout;
let GridLayoutItem;

const Grid = styled.div`
  ${({ container }) => container && GridLayout};
  ${({ item }) => item && GridItem};
  ${({ item, container, gutter }) => item && container && gutter && GridLayoutItem};
  box-sizing: border-box;
`;

const getWidth = ({ columns, theme }) => `${Math.floor(columns / theme.spacing.columns * 10000) / 100}%`;
const getGutter = ({ theme, gutter }) => (gutter ? theme.spacing.inRem(gutter) : 0);

GridLayout = css`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(${getWidth} + ${getGutter});
  box-sizing: border-box;
  margin: ${({ theme, gutter }) => (gutter ? theme.spacing.inRem(-gutter / 2) : 0)};

  & > ${Grid} {
    padding: ${({ theme, gutter }) => (gutter ? theme.spacing.inRem(gutter / 2) : 0)};
  }
`;

GridItem = css`
  flex-grow: 0;
  flex-basis: ${getWidth};
  max-width: ${getWidth};
  box-sizing: border-box;
`;

GridLayoutItem = css`
  flex-basis: calc(${getWidth} + ${getGutter});
  max-width: calc(${getWidth} + ${getGutter});
`;

Grid.defaultProps = {
  item: false,
  container: false,
  gutter: 2,
  columns: 12,
};

Grid.propTypes = {
  item: PropTypes.bool,
  container: PropTypes.bool,
  gutter: PropTypes.oneOf([0.5, 2, 4, 6, 8]),
  columns: PropTypes.number,
};

export default Grid;

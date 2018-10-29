import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem, getColor } from '@arborescence/selectors';

import Typography from './typography.component';

const getBackgroundColor = ({ theme: { palette }, color, hollow }) => (
  hollow ? palette.common.white : palette[color].main
);

const StyledButton = styled.button`
  display: inline-block;
  border: solid 1px ${({ theme: { palette }, hollow }) => (hollow ? palette.background.dropdown : palette.grey.main)};
  border-radius: ${inRem(1.5)};
  padding: ${inRem(1.8)} ${inRem(4)};
  min-width: ${inRem(25)};
  background-color: ${getBackgroundColor};
  color: ${({ theme: { palette }, hollow }) => (hollow ? palette.background.dropdown : palette.common.white)};
  text-align: center;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;

  &:not(:disabled):hover, &:not(:disabled):focus {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${getColor('grey', 'light')};
    color: ${getColor('grey', 'main')};
  }
`;

const StyledLink = StyledButton.withComponent('a');

const Button = ({ children, ...otherProps }) => React.createElement(
  otherProps.href ? StyledLink : StyledButton,
  otherProps,
  <Typography variant="input">{children}</Typography>,
);

Button.defaultProps = {
  hollow: false,
  color: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  hollow: PropTypes.bool,
};

export default Button;

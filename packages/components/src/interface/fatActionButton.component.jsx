import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem, getColor, getSecondary } from '@arborescence/selectors';

import Icon from '../icons/icon.component';
import Typography from './typography.component';

const FatButton = styled.button`
  display: inline-block;
  margin: 0;
  border: 0;
  border-radius: ${inRem(0.5)};
  padding: ${inRem(1.5)} ${inRem(2)};
  background-color: ${getColor('primary', 'dark')};
  cursor: pointer;
  outline: none;
  white-space: nowrap;

  &:hover, &focus {
    opacity: 0.8;
  }
`;

const IconCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${inRem(6)};
  height: ${inRem(6)};
  background-color: ${getSecondary};
`;

const ButtonText = styled(Typography)`
  position: relative;
  top: ${inRem(-0.5)};
  padding: 0 ${inRem(2)};
  color: ${({ theme }) => theme.palette.getContrastText(theme.palette.primary.dark)};
`;

const FatActionButton = ({ icon, text, component: Component, ...otherProps }) => (
  <Component {...otherProps}>
    <IconCircle>
      <Icon name={icon} size={15} />
    </IconCircle>
    <ButtonText>{text}</ButtonText>
  </Component>
);

FatActionButton.wrapper = FatButton;

FatActionButton.defaultProps = {
  component: FatButton,
};

FatActionButton.propTypes = {
  component: PropTypes.func,
  icon: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

export default FatActionButton;

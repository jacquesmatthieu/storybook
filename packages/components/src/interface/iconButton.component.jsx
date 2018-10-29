import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem, getColor, condition } from '@arborescence/selectors';

import Icon from '../icons/icon.component';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${condition('hollow', getColor('grey', 'main'), getColor('primary', 'main'))};
  border-radius: 50%;
  padding: 0;
  width: ${inRem(4.5)};
  height: ${inRem(4.5)};
  background-color: ${condition('hollow', getColor('common', 'white'), getColor('primary', 'main'))};
  cursor: pointer;
  outline: none;

  &:hover, &focus {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 1;
    cursor: default;
  }
`;

const IconButton = ({ icon, hollow, iconProps, ...otherProps }) => (
  <StyledButton hollow={hollow} {...otherProps}>
    <Icon fill={hollow ? 'background.dropdown' : 'common.white'} name={icon} size={10} {...iconProps} />
  </StyledButton>
);

IconButton.defaultProps = {
  hollow: false,
  iconProps: {},
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  hollow: PropTypes.bool,
  iconProps: PropTypes.shape({}),
};

export default IconButton;

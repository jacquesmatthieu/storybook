import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Typography from './typography.component';

const LabelWrapper = styled(Typography)`
  display: inline-block;
  border-radius: ${inRem(2)};
  padding: ${inRem(1.8)} ${inRem(2)} ${inRem(1.2)};
  background-color: ${({ theme, color }) => theme.palette.labels[color]};
  color: ${({ theme, color }) => theme.palette.getContrastText(theme.palette.labels[color])};
  white-space: nowrap;
`;

const Label = ({ children, ...otherProps }) => (
  <LabelWrapper {...otherProps} variant="input">
    {children}
  </LabelWrapper>
);

Label.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;

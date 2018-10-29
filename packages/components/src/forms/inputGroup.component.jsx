import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { condition, inRem } from '@arborescence/selectors';

import Typography from '../interface/typography.component';

const InputGroupWrapper = styled(Typography.withComponent('div'))`
  display: inline-block;
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  min-width: ${condition('fullWidth', '', inRem(50))};
  white-space: nowrap;
  box-sizing: border-box;
`;

const InputLabel = Typography.withComponent('label');

const InputGroup = ({ className, label, name, fullWidth, children }) => (
  <InputGroupWrapper className={className} fullWidth={fullWidth} variant="input">
    <InputLabel htmlFor={name} variant="inputLabel">{label}</InputLabel>
    {children}
  </InputGroupWrapper>
);

InputGroup.defaultProps = {
  className: '',
  label: '',
  fullWidth: false,
  name: undefined,
};

InputGroup.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
};

export default InputGroup;

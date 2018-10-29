import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import { StyledInput } from './input.component';
import InputGroup from './inputGroup.component';

const InputWrapper = styled(StyledInput.withComponent('div'))`
  display: flex;
  align-items: center;

  input {
    width: 100%;
  }
`;

const StyledNumberInput = styled.input`
  margin-right: ${inRem(1)};
  flex: 1;
  border: 0;
  background: none;
  outline: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
`;

const NumberInput = ({ unit, label, input, meta, fullWidth, ...otherProps }) => (
  <InputGroup name={input.name} label={label} fullWidth={fullWidth}>
    <InputWrapper
      fullWidth={fullWidth}
      error={!!meta.error && meta.touched}
      valid={meta.valid && meta.touched}
    >
      <StyledNumberInput type="number" {...input} {...otherProps} />
      {unit}
    </InputWrapper>
  </InputGroup>
);

NumberInput.defaultProps = {
  label: '',
  fullWidth: false,
  meta: {},
};

NumberInput.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    valid: PropTypes.bool,
    touched: PropTypes.bool,
  }),
};

export default NumberInput;

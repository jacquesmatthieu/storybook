import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, inRem } from '@arborescence/selectors';

import InputGroup from './inputGroup.component';

const getBackgroundColor = ({ theme: { palette }, valid, error }) => {
  if (error) {
    return palette.error.light;
  }
  if (valid) {
    return palette.secondary.light;
  }
  return palette.grey.light;
};

export const StyledInput = styled.input`
  display: block;
  border: solid 1px ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.grey.main)};
  border-radius: ${inRem(0.7)};
  padding: ${inRem(3.4)} ${inRem(3)} ${inRem(2.6)};
  width: 100%;
  height: ${inRem(9.4)};
  background-color: ${getBackgroundColor};
  outline: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: 1;
  box-sizing: border-box;

  &:focus {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
  
  &:disabled {
    border-color: ${getColor('grey', 'main')};
    background-color: ${getColor('grey', 'light')};
  }
`;

const StyledTextArea = styled(StyledInput.withComponent('textarea'))`
  height: auto;
  resize: none;
`;

StyledTextArea.displayName = 'StyledTextArea';

const Input = ({ label, input, meta, multiLine, fullWidth, ...otherProps }) => {
  const Component = multiLine ? StyledTextArea : StyledInput;
  return (
    <InputGroup name={input.name} label={label} fullWidth={fullWidth}>
      <Component
        id={input.name}
        fullWidth={fullWidth}
        error={!!meta.error && meta.touched}
        valid={meta.valid && meta.touched}
        {...input}
        {...otherProps}
      />
    </InputGroup>
  );
};

Input.defaultProps = {
  label: '',
  type: 'text',
  multiLine: false,
  fullWidth: false,
  meta: {},
};

Input.propTypes = {
  type: PropTypes.string,
  multiLine: PropTypes.bool,
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

Input.DivWithInputStyles = StyledInput.withComponent('div');

export default Input;

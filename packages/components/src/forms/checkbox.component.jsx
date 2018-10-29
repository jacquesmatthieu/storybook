import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, condition, getPrimary, inRem } from '@arborescence/selectors';
import Typography from '../interface/typography.component';

const StyledCheckbox = styled.span`
  display: inline-block;
  position: relative;
  margin-right: ${inRem(2)};
  border: 1px solid ${condition('selected', getPrimary, getColor('grey', 'dark'))};
  border-radius: ${inRem(0.5)};
  flex: 0 0 ${inRem(3)};
  width: ${inRem(3)};
  height: ${inRem(3)};
  cursor: pointer;

  &::before {
    position: absolute;
    top: ${inRem(0.4)};
    left: ${inRem(0.4)};
  }
`;

const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child) {
    margin-bottom: ${condition('hasLabel', inRem(2))};
  }
`;

const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;

  &:checked + ${StyledCheckbox}::before {
    content: '✔';
  }

  &:checked + ${StyledCheckbox} {
    background-color: ${getColor('secondary', 'light')};
  }

  &:focus + ${StyledCheckbox} {
    border-color: ${getPrimary};
  }
  
  &:disabled + ${StyledCheckbox} {
    border-color: ${getColor('grey', 'main')};
    cursor: not-allowed;
  }
`;

const Checkbox = ({ selected, name, children, 'data-test-id': dataTestId, ...props }) => (
  <LabelCheckbox htmlFor={name} hasLabel={!!children} data-test-id={dataTestId}>
    <InputCheckbox id={name} name={name} {...props} />
    <StyledCheckbox selected={selected} />
    <Typography variant="input">{children}</Typography>
  </LabelCheckbox>
);

Checkbox.defaultProps = {
  selected: false,
  name: undefined,
  children: undefined,
};

Checkbox.propTypes = {
  selected: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.node,
};

export default Checkbox;

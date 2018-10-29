import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { inRem } from '@arborescence/selectors';

import Icon from '../icons/icon.component';
import InputGroup from './inputGroup.component';
import { StyledInput } from './input.component';

const SelectIcon = styled(Icon)`
  position: absolute;
  bottom: ${inRem(3.5)};
  right: ${inRem(2)};
  pointer-events: none;
`;

const StyledSelect = styled(StyledInput.withComponent('select'))`
  line-height: initial;
  height: ${inRem(9.4)};
  appearance: none;

  &:disabled + ${SelectIcon} {
    visibility: hidden;
  }
`;

export const gqlSelect = (query, transform, ...args) => {
  const GQLSelect = ({ data, ...otherProps }) => !data.loading && (
    <Select {...otherProps} options={transform(data)} />
  );
  return graphql(query, ...args)(GQLSelect);
};

const Select = ({ label, options, fullWidth, input, meta, ...otherProps }) => (
  <InputGroup name={input.name} label={label} fullWidth={fullWidth}>
    <StyledSelect
      id={input.name}
      error={!!meta.error && meta.touched}
      valid={meta.valid}
      {...input}
      {...otherProps}
    >
      {options.map(([value, optionLabel]) => (
        <option value={value} key={value}>{optionLabel}</option>
      ))}
    </StyledSelect>
    <SelectIcon name="arrow" stroke="grey.dark" size={15} strokeWidth={1} />
  </InputGroup>
);

Select.defaultProps = {
  label: '',
  fullWidth: false,
};

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ).isRequired,
  fullWidth: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    valid: PropTypes.bool,
    touched: PropTypes.bool,
  }).isRequired,
};

export default Select;

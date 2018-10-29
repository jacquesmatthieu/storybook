import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Icon from '../icons/icon.component';
import { StyledInput } from './input.component';
import InputGroup from './inputGroup.component';
import Dropdown, { dropdownMenuMixin } from '../interface/dropdown.component';
import Checkbox from './checkbox.component';

const WrapperDropdown = styled(Dropdown)`
  position: relative;
  width: 100%;
`;

const InvisibleInput = styled.input`
  display: none;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  bottom: ${inRem(3)};
  right: ${inRem(3)};
  pointer-events: none;
`;

const StyledMultiSelect = styled(StyledInput.withComponent('div'))`
  display: block;
  position: relative;
  border-bottom-left-radius: ${({ theme, open }) => (open ? 0 : theme.spacing.inRem(0.7))};
  border-bottom-right-radius: ${({ theme, open }) => (open ? 0 : theme.spacing.inRem(0.7))};
  height: ${inRem(9.4)};
  cursor: ${({ disabled }) => (disabled ? '' : 'pointer')};
  
  ${InvisibleInput}:disabled ~ & {
    pointer-events: none;
    
    ${SelectIcon} {
      visibility: hidden;
    }
  }
`;

const StyledMultiSelectDropdown = styled(StyledInput.withComponent('div'))`
  ${dropdownMenuMixin};
  position: absolute;
  left: ${inRem(0)};
  top: ${inRem(9.4)};
  height: auto;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
`;

class MultiSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  handleChange = value => (e) => {
    const { input: { value: oldValues, onChange } } = this.props;

    const newValues = e.target.checked
      ? Array.from(new Set([...oldValues, value]).values())
      : oldValues.filter(val => val !== value);

    onChange(newValues);
  };

  handleKeyDown = (open, toggle, keyDown) => (e) => {
    const { selectedIndex } = this.state;
    const { options, input, disabled } = this.props;

    if (disabled) {
      return;
    }

    keyDown(e);

    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      toggle();
    }
    if (open && e.key === 'ArrowDown') {
      e.preventDefault();
      this.setState({ selectedIndex: selectedIndex + 1 < options.length ? selectedIndex + 1 : 0 });
    }
    if (open && e.key === 'ArrowUp') {
      e.preventDefault();
      this.setState({ selectedIndex: selectedIndex - 1 >= 0 ? selectedIndex - 1 : options.length - 1 });
    }
    if (open && e.key === 'Tab') {
      toggle();
    }

    if (open && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      const value = options[selectedIndex][0];
      const checked = !input.value.includes(value);
      this.handleChange(value)({ target: { checked } });
    }
  };

  getRef = (el) => {
    const { autoFocus } = this.props;
    if (el && autoFocus) {
      el.focus();
    }
  };

  render() {
    const { label, options, fullWidth, input, meta, disabled, ...otherProps } = this.props;
    const { selectedIndex } = this.state;

    return (
      <InputGroup name={input.name} label={label} fullWidth={fullWidth}>
        <WrapperDropdown>
          {({ open, toggle, keyDown }) => (
            <Fragment>
              <InvisibleInput />
              <StyledMultiSelect
                innerRef={this.getRef}
                onClick={disabled ? undefined : toggle}
                open={open}
                error={!!meta.error && meta.touched}
                valid={meta.valid && meta.touched}
                tabIndex={disabled ? undefined : 0}
                onFocus={input.onFocus}
                onBlur={input.onBlur}
                onKeyDown={this.handleKeyDown(open, toggle, keyDown)}
                disabled={disabled}
                {...otherProps}
              >
                {input.value.map(value => options.find(([optionValue]) => optionValue === value)[1]).join(', ')}
                <SelectIcon
                  direction={open ? 'up' : 'down'}
                  name="arrow"
                  stroke="grey.dark"
                  size={15}
                  strokeWidth={1}
                />
              </StyledMultiSelect>
              <StyledMultiSelectDropdown open={open}>
                {options.map(([optionValue, optionLabel], i) => (
                  <Checkbox
                    key={optionValue}
                    name={`${label}-${optionValue}`}
                    type="checkbox"
                    value={optionValue}
                    checked={input.value.includes(optionValue)}
                    onChange={this.handleChange(optionValue)}
                    selected={i === selectedIndex}
                  >
                    {optionLabel}
                  </Checkbox>
                ))}
              </StyledMultiSelectDropdown>
            </Fragment>
          )}
        </WrapperDropdown>
      </InputGroup>
    );
  }
}

MultiSelect.defaultProps = {
  label: '',
  disabled: false,
  fullWidth: false,
};

MultiSelect.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    valid: PropTypes.bool,
    touched: PropTypes.bool,
  }).isRequired,
  disabled: PropTypes.bool,
};

export default MultiSelect;

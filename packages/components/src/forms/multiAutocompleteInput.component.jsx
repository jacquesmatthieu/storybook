import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';
import IconButton from '../interface/iconButton.component';
import InputGroup from './inputGroup.component';
import Autocomplete from '../interface/autocomplete.component';

const UsersList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const User = styled.li`
  margin-bottom: ${inRem(2)};
`;

const Item = styled.span`
  margin-left: ${inRem(1)};
`;

class MultiAutocompleteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.initialValues,
    };
  }

  handleChange = (value, result) => {
    if (!value) {
      return;
    }

    const { input: { onChange } } = this.props;
    const { values } = this.state;
    const newValues = new Map([...values, [value, result]]);
    this.setState({ values: Array.from(newValues.entries()) });
    onChange(Array.from(newValues.keys()));
  };

  handleRemove = value => () => {
    const { input: { onChange } } = this.props;
    const { values } = this.state;
    const newValues = values.filter(([v]) => v !== value);
    this.setState({ values: newValues });
    onChange(newValues.map(([v]) => v));
  };

  render() {
    const {
      className,
      label,
      input: { name },
      fullWidth,
      meta: { error, valid },
      renderValue,
      results,
      ...otherProps
    } = this.props;
    const { values } = this.state;

    return (
      <InputGroup className={className} label={label} fullWidth={fullWidth} name={name}>
        <Autocomplete
          results={results}
          onChange={this.handleChange}
          inputProps={{ valid, error }}
          clearAfterChange
          {...otherProps}
        />
        <UsersList>
          {values.map(([value, result]) => (
            <User key={value}>
              <IconButton icon="cross" hollow onClick={this.handleRemove(value)} />
              <Item data-test-id="attendee">{renderValue(result)}</Item>
            </User>
          ))}
        </UsersList>
      </InputGroup>
    );
  }
}

MultiAutocompleteInput.defaultProps = {
  initialValues: [],
};

MultiAutocompleteInput.protoTypes = {
  initialValues: PropTypes.arrayOf(PropTypes.any),
  className: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  renderValue: PropTypes.func.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    valid: PropTypes.bool,
    error: PropTypes.bool,
  }).isRequired,
};

export default MultiAutocompleteInput;

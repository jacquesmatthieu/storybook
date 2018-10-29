import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Button from './button.component';
import Typography from './typography.component';
import InputGroup from '../forms/inputGroup.component';

const ToggleInputGroup = styled(InputGroup)`
  min-width: 0;
`;

const ButtonExtend = styled(Button)`
  min-width:${inRem(0.5)};
`;

const MiddleText = styled(Typography)`
  margin: ${inRem(1.5)};
`;

class ToggleInput extends Component {
  handleClick = checked => () => {
    const { input: { onChange } } = this.props;
    onChange(checked);
  }

  render() {
    const { label, fullWidth, other, left, right, input: { value } } = this.props;

    return (
      <ToggleInputGroup label={label} fullWidth={fullWidth}>
        <div>
          <ButtonExtend
            type="button"
            hollow={!!value}
            onClick={this.handleClick(false)}
            data-test-id="toggleLeftButton"
          >
            {left}
          </ButtonExtend>
          <MiddleText>{other}</MiddleText>
          <ButtonExtend
            type="button"
            hollow={!value}
            onClick={this.handleClick(true)}
            data-test-id="toggleRightButton"
          >
            {right}
          </ButtonExtend>
        </div>
      </ToggleInputGroup>
    );
  }
}

ToggleInput.defaultProps = {
  label: '',
  fullWidth: false,
  other: '',
  left: '',
  right: '',
};

ToggleInput.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  other: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default ToggleInput;

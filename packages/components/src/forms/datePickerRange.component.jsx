import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem, getColor } from '@arborescence/selectors';

import Icon from '../icons/icon.component';
import Typography from '../interface/typography.component';

const StyledWrapperDatePickerRange = styled(Typography.withComponent('div'))`
  display: inline-block;
  margin-bottom: ${inRem(2)};
  border: solid 1px ${getColor('background', 'dropdown')};
  border-radius: ${inRem(1.5)};
  padding: ${inRem(1.6)} ${inRem(2)};
  background-color: ${getColor('common', 'white')};
`;

const StyledWrapperDatePicker = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDatePickerInput = styled.input`
  display: inline-block;
  border: none;
  background: none;
  font-family: inherit;
  line-height: 1;
  color: inherit;
  outline: none;
  text-align: center;
`;

class DatePickerRange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: '',
      endDate: '',
    };
  }

  handleChange = prop => (e) => {
    const { onChange } = this.props;
    this.setState({ [prop]: e.target.value });

    const { startDate, endDate } = this.state;
    onChange({ startDate, endDate });
  };

  render() {
    const { startDatePlaceholder, endDatePlaceholder } = this.props;
    const { startDate, endDate } = this.state;
    return (
      <StyledWrapperDatePickerRange variant="input">
        <StyledWrapperDatePicker>
          <StyledDatePickerInput
            type="date"
            placeholder={startDatePlaceholder}
            value={startDate}
            onChange={this.handleChange('startDate')}
            max={endDate}
          />
          <Icon name="slash" fill="grey.main" size={20} />
          <StyledDatePickerInput
            type="date"
            placeholder={endDatePlaceholder}
            value={endDate}
            onChange={this.handleChange('endDate')}
            min={startDate}
          />
        </StyledWrapperDatePicker>
      </StyledWrapperDatePickerRange>
    );
  }
}

DatePickerRange.defaultProps = {
  startDatePlaceholder: '',
  endDatePlaceholder: '',
  onChange() {
  },
};

DatePickerRange.propTypes = {
  startDatePlaceholder: PropTypes.string,
  endDatePlaceholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePickerRange;

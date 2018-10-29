import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { inRem } from '@arborescence/selectors';

import Input from './input.component';

const DateInput = styled(Input)`
  padding: ${inRem(2.5)} ${inRem(3)} ${inRem(1.7)};
`;

const DatePicker = props => <DateInput {...props} type="date" />;

DatePicker.format = value => (value ? moment(value).format('YYYY-MM-DD') : '');

DatePicker.normalize = value => (value ? moment(value).toISOString() : value);

export default DatePicker;

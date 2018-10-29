import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { inRem } from '@arborescence/selectors';

import Breadcrumb from './breadcrumb.component';
import Typography from './typography.component';
import IconButton from './iconButton.component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${inRem(1)};
  margin-bottom: ${inRem(8)};
`;

const MonthSelectorText = styled(Typography)`
  width: ${inRem(50)};
  height: ${inRem(4)};
  text-align: center;
`;

const handleMonthChange = (operation, date, onChange) => () => (
  onChange(moment(date, 'YYYY-MM')[operation](1, 'month').format('YYYY-MM'))
);

const MonthlyPageHeader = ({ className, steps, date, onChange, children }) => (
  <Container className={className}>
    <Breadcrumb steps={steps} />
    <MonthSelector>
      <IconButton
        icon="arrow"
        iconProps={{ direction: 'left' }}
        onClick={handleMonthChange('subtract', date, onChange)}
        data-test-id="previousMonthButton"
      />
      <MonthSelectorText variant="headlineContainer">
        {moment(date).format('MMMM YYYY')}
      </MonthSelectorText>
      <IconButton
        icon="arrow"
        iconProps={{ direction: 'right' }}
        onClick={handleMonthChange('add', date, onChange)}
        data-test-id="nextMonthButton"
      />
    </MonthSelector>
    {children}
  </Container>
);

MonthlyPageHeader.defaultProps = {
  className: '',
  children: null,
};

MonthlyPageHeader.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default MonthlyPageHeader;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Typography from './typography.component';

const StyledInfoBox = styled.div`
  display: inline-block;
  margin-bottom: ${inRem(6)};
`;

const InfoBoxLabel = styled(Typography)`
  display: block;
  margin-bottom: ${inRem(0.5)};
`;

const InfoBox = ({ className, label, text }) => (
  <StyledInfoBox className={className}>
    <InfoBoxLabel variant="infoBoxLabel">{label}</InfoBoxLabel>
    <Typography variant="input">{text}</Typography>
  </StyledInfoBox>
);

InfoBox.defaultProps = {
  className: '',
};

InfoBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoBox;

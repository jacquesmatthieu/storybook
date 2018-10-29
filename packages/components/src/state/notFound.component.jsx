import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { translate } from 'react-i18next';
import { inRem } from '@arborescence/selectors';

import Typography from '../interface/typography.component';

const ErrorWrapper = styled.div`
  padding: ${inRem(2)};
`;

const NotFound = ({ t }) => (
  <ErrorWrapper data-test-id="notFoundError">
    <Typography variant="headline">{t('error.title')}</Typography>
    <br />
    <Typography>{t('error.notFoundError')}</Typography>
  </ErrorWrapper>
);

NotFound.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('inline')(NotFound);

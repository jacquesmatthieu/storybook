import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Button from '../interface/button.component';
import Typography from '../interface/typography.component';
import { ErrorBlock } from '../interface/messageBlock.component';

const ErrorWrapper = styled.div`
  padding: ${inRem(2)};
`;

const ErrorCodeBlock = styled(ErrorBlock.withComponent('pre'))`
  margin: ${inRem(4)} ${inRem(2)} 0;
  font-family: "Fira Code", Consolas, monospace, sans-serif;
`;

const reloadWindow = () => window.location.reload();

const AppError = ({ t, error }) => (
  <ErrorWrapper>
    <Typography variant="headline">{t('error.title')}</Typography>
    <br />
    <Typography>{t('error.appError')}</Typography>
    <br />
    {process.env.NODE_ENV !== 'production' && !!error && (error instanceof Error) && (
      <ErrorCodeBlock>{error.stack || error.toString()}</ErrorCodeBlock>
    )}
    <br />
    <Button hollow type="button" onClick={reloadWindow}>{t('reload')}</Button>
  </ErrorWrapper>
);

AppError.defaultProps = {
  error: '',
};

AppError.propTypes = {
  t: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.instanceOf(Error)]),
};

export default translate('inline')(AppError);

import React from 'react';
import * as PropTypes from 'prop-types';

import withCurrentApp from './withCurrentApp.hoc';
import AppError from './appError.component';
import AppLoading from './appLoading.component';

const Loading = ({ currentApp, error }) => (
  error ? <AppError error={error} /> : <AppLoading appId={currentApp.id} />
);

Loading.defaultProps = {
  error: false,
};

Loading.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object]),
  currentApp: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default withCurrentApp(Loading);

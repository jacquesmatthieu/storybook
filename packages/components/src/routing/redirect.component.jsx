import React from 'react';
import { Redirect as ReactRouterRedirect } from 'react-router';
import PropTypes from 'prop-types';
import { urlResolver } from '@arborescence/common';

const Redirect = ({ to, state, params, ...props }) => {
  const pathname = to.match(/^\//) ? to : urlResolver.get(to, params);
  if (typeof pathname === 'undefined') {
    throw new Error(`Unknown route ${to}`);
  }

  return (
    <ReactRouterRedirect to={state ? { pathname, state } : pathname} {...props} />
  );
};

Redirect.defaultProps = {
  state: null,
  params: {},
};

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
  state: PropTypes.shape({ referrer: PropTypes.string }),
  params: PropTypes.shape({}),
};

export default Redirect;

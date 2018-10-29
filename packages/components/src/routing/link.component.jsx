import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { urlResolver } from '@arborescence/common';

const Link = ({ to, params, ...props }) => <RouterLink to={urlResolver.get(to, params)} {...props} />;

Link.defaultProps = {
  params: {},
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object,
};

export default Link;

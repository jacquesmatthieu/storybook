import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { getCurrentApp } from './withCurrentApp.hoc';

const Meta = ({ title, pathname, children }) => (
  <Helmet>
    <title>
      {title && `${title} - `}{getCurrentApp(pathname).name}
    </title>
    {children}
  </Helmet>
);

Meta.defaultProps = {
  title: undefined,
  children: undefined,
};

Meta.propTypes = {
  title: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Meta;

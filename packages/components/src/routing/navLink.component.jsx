import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { urlResolver } from '@arborescence/common';

const NavLink = ({
  to,
  exact,
  params,
  component: Component,
  location,
  children,
  'data-test-id': testId,
}) => {
  let active = urlResolver.get(to, params) === location.pathname;
  if (!exact && !active) {
    active = new RegExp(`^${urlResolver.get(to, params)}`, 'i').test(location.pathname);
  }

  return (
    <Component
      to={urlResolver.get(to, params)}
      active={active}
      data-test-id={testId}
    >
      {children}
    </Component>
  );
};

NavLink.defaultProps = {
  exact: false,
  'data-test-id': '',
  params: {},
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  params: PropTypes.shape({}),
  exact: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  component: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  'data-test-id': PropTypes.string,
};

export default withRouter(NavLink);

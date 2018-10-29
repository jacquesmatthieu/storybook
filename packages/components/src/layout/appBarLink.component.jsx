import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { inRem } from '@arborescence/selectors';

import NavLink from '../routing/navLink.component';
import Typography from '../interface/typography.component';

const Link = styled(({ active, ...props }) => <RouterLink {...props} />)`
  display: block;
  border-radius: ${inRem(0.5)};
  padding: ${inRem(1.8)} ${inRem(5)};
  min-width: ${inRem(20)};
  background-color: ${({ theme, active }) => (active ? theme.palette.secondary.main : '')};
  color: inherit;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;

const AppBarLink = ({ children, ...props }) => (
  <NavLink {...props} component={Link}>
    <Typography variant="header">
      {children}
    </Typography>
  </NavLink>
);

AppBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppBarLink;

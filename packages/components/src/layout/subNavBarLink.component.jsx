import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { condition, getColor, inRem } from '@arborescence/selectors';

import NavLink from '../routing/navLink.component';
import Typography from '../interface/typography.component';

const Link = styled(({ active, ...props }) => <RouterLink {...props} />)`
  display: block;
  margin: 0 ${inRem(1)};
  padding: ${inRem(1)} ${inRem(4)};
  min-width: ${inRem(20)};
  border-bottom: solid 1px ${condition('active', getColor('secondary', 'main'), 'transparent')};
  color: ${({ theme, active }) => (active ? theme.palette.secondary.main : 'inherit')};
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  white-space: nowrap;
`;

const SubNavBarLink = ({ children, ...props }) => (
  <NavLink {...props} component={Link}>
    <Typography variant="header">
      {children}
    </Typography>
  </NavLink>
);

SubNavBarLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SubNavBarLink;

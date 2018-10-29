import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem, getColor } from '@arborescence/selectors';

import { appSwitcherWidth } from './appBar.component';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  padding-left: ${inRem(appSwitcherWidth + 2)};
  height: ${inRem(10.6)};
  background-color: ${getColor('secondary', 'dark')};
  color: ${({ theme }) => theme.palette.getContrastText(theme.palette.secondary.dark)};
`;

const SubNavBar = ({ children }) => (
  <StyledNav>
    {children}
  </StyledNav>
);

SubNavBar.defaultProps = {
  children: null,
};

SubNavBar.propTypes = {
  children: PropTypes.node,
};

export default SubNavBar;

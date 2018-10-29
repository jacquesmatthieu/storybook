import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, getPrimary, inRem } from '@arborescence/selectors';

import Typography from '../interface/typography.component';
import Icon from '../icons/icon.component';
import Link from '../routing/link.component';
import Dropdown, { dropdownMenuMixin } from '../interface/dropdown.component';

export const appSwitcherWidth = 52;
export const appBarHeight = 12;

const AppBarWrapper = styled.div`
  display: flex;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${inRem(appBarHeight)};
  background: ${getColor('primary', 'dark')};
  color: ${({ theme }) => theme.palette.getContrastText(theme.palette.primary.dark)};
  z-index: 20;
`;

const AppSwitcher = styled(Dropdown)`
  flex: ${inRem(appSwitcherWidth)} 0 0;
`;

const AppSwitcherButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  border: 0;
  padding-left: ${inRem(21)};
  width: 100%;
  height: 100%;
  background: ${getPrimary};
  cursor: pointer;
  z-index: 22;
  color: inherit;
  outline: none;
`;

const AppSwitcherMenu = styled.div`
  ${dropdownMenuMixin};
  position: absolute;
  top: ${inRem(12)};
  left: 0;
  padding-top: ${inRem(5)};
  width: ${inRem(appSwitcherWidth)};
  background-color: ${getColor('background', 'dropdown')};
  box-shadow: ${({ theme }) => theme.shadows.dropdown};
`;

const AppLogo = styled.img`
  position: absolute;
  top: ${inRem(0.5)};
  left: ${inRem(3)};
  margin-right: ${inRem(2)};
  border: solid 8px ${getPrimary};
  border-radius: 50%;
  width: ${inRem(16)};
  height: ${inRem(16)};
  background-color: ${getPrimary};
  box-sizing: border-box;
`;

const DropDownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${inRem(2)};
  border-radius: ${inRem(1.5)};
  width: ${inRem(5)};
  height: ${inRem(4)};
  background-color: ${({ theme, color }) => color || theme.palette.primary.dark};
`;

const AppLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: ${inRem(3)} ${inRem(4)};
  color: inherit;
  text-decoration: none;
`;

const AppLinkLogo = styled.img`
  margin: 0 ${inRem(4)} 0 ${inRem(1)};
  border-radius: 50%;
  border: solid 8px ${({ color }) => color};
  width: ${inRem(12)};
  height: ${inRem(12)};
  background-color: ${({ color }) => color};
  box-sizing: border-box;
`;

const AppName = styled(Typography)`
  flex: 1;
`;

const AppBarLinks = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 ${inRem(6)};
`;

const UserDropDownButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: none;
  outline: 0;
  cursor: pointer;
  color: inherit;
`;

const Avatar = styled.img`
  display: block;
  margin-right: ${inRem(2)};
  border-radius: 50%;
  flex: ${inRem(8)} 0 0;
  height: ${inRem(8)};
`;

const UserDropdownIcon = styled(DropDownIcon)`
  margin-right: ${inRem(2)};
  border-radius: 50%;
  width: ${inRem(4)};
  background-color: ${getPrimary};
`;

class AppBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMenuOpened: false,
    };
  }

  handleToggleUserMenu = () => {
    const { userMenuOpened } = this.state;
    this.setState({ userMenuOpened: !userMenuOpened });
  };

  render() {
    const { currentAppName, apps, children, fixed, user } = this.props;
    const { userMenuOpened } = this.state;
    const currentApp = apps.find(app => app.id === currentAppName);
    return (
      <AppBarWrapper fixed={fixed}>
        <AppSwitcher>
          {({ open, toggle }) => (
            <Fragment>
              <AppSwitcherButton onClick={toggle} data-test-id="appSwitcherButton">
                <AppLogo src={currentApp.logo} alt={`${currentApp.name} logo`} />
                <Typography variant="title">{currentApp.name}</Typography>
                <DropDownIcon>
                  <Icon name="arrow" direction={open ? 'up' : 'down'} />
                </DropDownIcon>
              </AppSwitcherButton>
              <AppSwitcherMenu open={open}>
                {apps.filter(app => app.id !== currentAppName).map(app => (
                  <AppLink key={app.id} to={app.route} data-test-id={`${app.id}AppLink`}>
                    <AppLinkLogo src={app.logo} color={app.color} />
                    <AppName variant="title">{app.name}</AppName>
                    <DropDownIcon color={app.color}>
                      <Icon name="arrow" direction="right" />
                    </DropDownIcon>
                  </AppLink>
                ))}
              </AppSwitcherMenu>
            </Fragment>
          )}
        </AppSwitcher>
        <AppBarLinks>{children}</AppBarLinks>
        <UserDropDownButton onClick={this.handleToggleUserMenu}>
          <Avatar src={user.profilePictureUrl} />
          <Typography variant="header">{user.firstName} {user.lastName}</Typography>
          <UserDropdownIcon>
            <Icon name="arrow" direction={userMenuOpened ? 'up' : 'down'} />
          </UserDropdownIcon>
        </UserDropDownButton>
      </AppBarWrapper>
    );
  }
}

AppBar.defaultProps = {
  fixed: false,
  children: null,
};

AppBar.propTypes = {
  fixed: PropTypes.bool,
  currentAppName: PropTypes.string.isRequired,
  apps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profilePictureUrl: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default AppBar;

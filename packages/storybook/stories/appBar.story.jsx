import React, { Fragment } from 'react';
import { StaticRouter } from 'react-router';
import styled from 'styled-components';
import { AppBar, AppBarLink, SearchBar, SubNavBar, SubNavBarLink } from '@arborescence/components';
import config from '@arborescence/config/app';

import { Spacer, StoryTitle } from './support/styledComponents';

const user = {
  firstName: 'Test',
  lastName: 'User',
  profilePictureUrl: 'http://placekitten.com/100/100',
};

const RightAlign = styled.div`
  flex: 1;
`;

export default () => (
  <StaticRouter location="/obouleau" context={{}}>
    <Fragment>
      <StoryTitle>Application navigation bar</StoryTitle>
      This component allows to build the top navigation bar for each application
      <Spacer />
      <AppBar currentAppName={config.apps[1].id} apps={config.apps} user={user}>
        <AppBarLink to="obouleau">Active link</AppBarLink>
        <AppBarLink to="foogere">Inactive link</AppBarLink>
      </AppBar>
      <Spacer large />
      With search bar:
      <Spacer />
      <AppBar currentAppName={config.apps[1].id} apps={config.apps} user={user}>
        <RightAlign />
        <SearchBar placeholder="Search..." />
      </AppBar>
      <Spacer large />
      With sub navigation bar:
      <Spacer />
      <AppBar currentAppName={config.apps[1].id} apps={config.apps} user={user}>
        <AppBarLink to="obouleau">Active link</AppBarLink>
      </AppBar>
      <SubNavBar>
        <SubNavBarLink to="obouleau">Active link</SubNavBarLink>
        <SubNavBarLink to="foogere">Inactive link</SubNavBarLink>
      </SubNavBar>
    </Fragment>
  </StaticRouter>
);

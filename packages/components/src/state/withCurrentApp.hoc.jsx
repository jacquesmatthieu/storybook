import React from 'react';
import { withRouter } from 'react-router';
import config from '@arborescence/config/app';
import { urlResolver } from '@arborescence/common';

export const getCurrentApp = (pathname) => {
  const match = urlResolver.match(pathname);
  return match ? (config.apps.find(app => app.route === match.parents[0]) || config.defaultApp) : null;
};

const withCurrentApp = (WrappedComponent) => {
  const ComponentWithCurrentApp = ({ location, children, ...props }) => (
    <WrappedComponent {...props} currentApp={getCurrentApp(location.pathname)}>
      {children}
    </WrappedComponent>
  );
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithCurrentApp.displayName = `WithCurrentApp(${name})`;
  return withRouter(ComponentWithCurrentApp);
};

export default withCurrentApp;

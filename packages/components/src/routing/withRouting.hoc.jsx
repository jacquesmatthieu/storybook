import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push, replace } from 'connected-react-router';
import { urlResolver } from '@arborescence/common';

const routingConnector = connect(undefined, dispatch => bindActionCreators({ push, replace }, dispatch));

const withRouting = (WrappedComponent) => {
  const ComponentWithRouting = ({ push: connectedPush, replace: connectedReplace, children, ...props }) => (
    <WrappedComponent
      {...props}
      push={(...args) => connectedPush(urlResolver.get(...args))}
      replace={(...args) => connectedReplace(urlResolver.get(...args))}
    >
      {children}
    </WrappedComponent>
  );
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithRouting.displayName = `WithRouting(${name})`;
  return routingConnector(ComponentWithRouting);
};

export default withRouting;

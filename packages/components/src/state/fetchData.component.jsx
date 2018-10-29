import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Loading from './loading.component';
import AppError from './appError.component';

const FetchData = ({ children: render, ...props }) => (
  <Query {...props}>
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <Loading />;
      }
      if (error) {
        return <AppError error={error} />;
      }
      return render(data, refetch);
    }}
  </Query>
);

FetchData.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  query: PropTypes.any.isRequired,
  children: PropTypes.func.isRequired,
};

export const withFetchData = (query, config = {}) => (WrappedComponent) => {
  const Component = ({ children, ...props }) => (
    <FetchData
      query={query}
      {...config}
      {...(typeof config.options === 'function' ? config.options(props) : config.options)}
    >
      {(data, refetch) => (
        <WrappedComponent {...props} data={data} refetch={refetch}>
          {children}
        </WrappedComponent>
      )}
    </FetchData>
  );
  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  Component.displayName = `WithFetchData(${name})`;
  return Component;
};

export default FetchData;

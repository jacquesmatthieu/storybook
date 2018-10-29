import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withApollo } from 'react-apollo';

import InputGroup from './inputGroup.component';
import Autocomplete from '../interface/autocomplete.component';
import AppError from '../state/appError.component';

const AutocompleteInput = ({
  className,
  label,
  fullWidth,
  input: { onChange, name },
  meta: { error, valid },
  ...otherProps
}) => (
  <InputGroup className={className} label={label} fullWidth={fullWidth} name={name}>
    <Autocomplete
      onChange={onChange}
      inputProps={{ valid, error }}
      {...otherProps}
    />
  </InputGroup>
);

AutocompleteInput.defaultProps = {
  className: '',
  label: '',
  fullWidth: false,
  meta: {},
};

AutocompleteInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    valid: PropTypes.bool,
    error: PropTypes.bool,
  }),
};

export const gqlAutoComplete = (query, {
  component: WrappedComponent = AutocompleteInput,
  transform,
  renderResult,
  ...config
}) => {
  class GQLAutocomplete extends Component {
    constructor(props) {
      super(props);

      this.state = {
        data: {},
      };
    }

    handleFetchSearchResults = async (search) => {
      const { client } = this.props;
      const { data } = this.state;
      this.setState({ data: { ...data, loading: true } });
      try {
        const { options = {} } = config;
        const response = await client.query({
          ...options,
          query,
          fetchPolicy: 'no-cache',
          variables: {
            ...options.variables,
            search,
          },
        });
        this.setState({ data: response.data });
      } catch (error) {
        this.setState({ data: { error } });
      }
    };

    render() {
      const { data } = this.state;

      if (data.error) {
        return <AppError error={data.error} />;
      }

      return (
        <WrappedComponent
          {...this.props}
          results={data.loading ? [] : transform(data)}
          onFetchResults={this.handleFetchSearchResults}
          getResultValue={result => result._id}
          renderResult={renderResult}
        />
      );
    }
  }

  return withApollo(GQLAutocomplete);
};

export default AutocompleteInput;

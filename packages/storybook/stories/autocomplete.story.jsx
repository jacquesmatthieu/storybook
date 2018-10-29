import React, { Fragment } from 'react';
import { Autocomplete, AutocompleteInput } from '@arborescence/components';
import { Spacer, StoryTitle } from './support/styledComponents';

const users = [
  { _id: 'test', firstName: 'Foo', lastName: 'Bar' },
  { _id: 'test2', firstName: 'Baz', lastName: 'Qux' },
  { _id: 'test3', firstName: 'Hello', lastName: 'World' },
  { _id: 'test4', firstName: 'Yolo', lastName: 'Swag' },
];

const getResultValue = result => result._id;

const renderResult = result => `${result.firstName} ${result.lastName}`;

const onFetchResults = () => {};

export default () => (
  <Fragment>
    <StoryTitle>Autocomplete</StoryTitle>
    Autocomplete allows you to have an input that unravels a list of propositions bellow it:
    <Spacer />
    <Autocomplete
      results={users}
      onFetchResults={onFetchResults}
      getResultValue={getResultValue}
      renderResult={renderResult}
    />
    <Spacer />
    Autocomplete with initial query:
    <Spacer />
    <Autocomplete
      initialQuery={renderResult(users[0])}
      results={users}
      onFetchResults={onFetchResults}
      getResultValue={getResultValue}
      renderResult={renderResult}
    />
    <Spacer />
    Autocomplete as Redux input:
    <Spacer />
    <AutocompleteInput
      input={{ name: 'foo' }}
      results={users}
      onFetchResults={onFetchResults}
      getResultValue={getResultValue}
      renderResult={renderResult}
    />
  </Fragment>
);

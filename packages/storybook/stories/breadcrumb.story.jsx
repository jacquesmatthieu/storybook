import React, { Fragment } from 'react';
import { Breadcrumb } from '@arborescence/components';
import { StaticRouter } from 'react-router';

import { Spacer, StoryTitle } from './support/styledComponents';

export default () => (
  <StaticRouter location="/obouleau" context={{}}>
    <Fragment>
      <StoryTitle>Breadcrumbs</StoryTitle>
      Breadcrumb component is used to display navigation levels of current page:
      <Spacer />
      <Breadcrumb steps={['Foo']} />
      <Spacer />
      <Breadcrumb steps={['Foo', 'Bar']} />
    </Fragment>
  </StaticRouter>
);

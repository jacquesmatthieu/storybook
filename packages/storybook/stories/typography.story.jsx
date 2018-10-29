import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';

import { Typography } from '@arborescence/components';
import { Spacer, StoryTitle, ExampleBox } from './support/styledComponents';

const TypographyStory = withTheme(({ theme }) => (
  <Fragment>
    <StoryTitle>Text variants</StoryTitle>
    Typography component supports the followings variants:
    <Spacer />
    <ExampleBox>
      {Object.keys(theme.typography.variants).map(variant => (
        <Fragment key={variant}>
          <Typography variant={variant}>{variant}</Typography>
          <Spacer />
        </Fragment>
      ))}
    </ExampleBox>
  </Fragment>
));

export default () => <TypographyStory />;

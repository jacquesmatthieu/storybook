import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';
import { Label } from '@arborescence/components';

import { Spacer, StoryTitle, HorizontalSpacer } from './support/styledComponents';

const LabelsStory = withTheme(({ theme }) => (
  <Fragment>
    <StoryTitle>Labels</StoryTitle>
    Labels are little components used to tag informations with color and make them more visible:
    <Spacer />
    {Object.keys(theme.palette.labels).map(key => (
      <Fragment key={key}>
        <Label color={key}>{key[0].toUpperCase()}{key.slice(1)}</Label>
        <HorizontalSpacer />
      </Fragment>
    ))}
  </Fragment>
));

export default () => <LabelsStory />;

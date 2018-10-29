import React, { Fragment } from 'react';
import { ErrorBlock, InfoBlock, WarningBlock } from '@arborescence/components';

import { Spacer, StoryTitle } from './support/styledComponents';

export default () => (
  <Fragment>
    <StoryTitle>Message blocks</StoryTitle>
    Message blocks are components used to display informations:
    <Spacer />
    <InfoBlock>{'Hi! I\'m an information block!'}</InfoBlock>
    <Spacer />
    <WarningBlock>{'Hi! I\'m a warning block!'}</WarningBlock>
    <Spacer />
    <ErrorBlock>{'Hi! I\'m an error block!'}</ErrorBlock>
  </Fragment>
);

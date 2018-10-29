import React, { Fragment } from 'react';
import styled from 'styled-components';

import Icon, { iconNames } from '@arborescence/components/src/icons/icon.component';
import { Spacer, StoryTitle, ExampleBox } from './support/styledComponents';

const IconBox = styled(ExampleBox)`
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  svg {
    margin-bottom: 5px;
  }
`;

export default () => (
  <Fragment>
    <StoryTitle>Icons</StoryTitle>
    Bellow are all the icons available within the application:
    <Spacer />
    <IconBox>
      {iconNames.map(name => (
        <IconWrapper key={name}>
          <Icon name={name} fill="background.dropdown" stroke="none" size={30} />
          {name}
        </IconWrapper>
      ))}
    </IconBox>
  </Fragment>
);

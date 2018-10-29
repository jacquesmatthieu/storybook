import React, { Fragment, Component } from 'react';
import { FatActionButton, Button, ExpandButton, IconButton } from '@arborescence/components';
import { Spacer, HorizontalSpacer, StoryTitle } from './support/styledComponents';

class ButtonsStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  handleExpandButtonClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { expanded } = this.state;
    return (
      <Fragment>
        <StoryTitle>Buttons</StoryTitle>
        Fat action button:
        <Spacer />
        <FatActionButton icon="plus" text="I'm a big fat button" />
        <Spacer />
        Primary button:
        <Spacer />
        <Button>Primary button</Button>
        <HorizontalSpacer />
        <Button hollow>Primary hollow button</Button>
        <Spacer />
        Secondary button:
        <Spacer />
        <Button color="secondary">Secondary button</Button>
        <HorizontalSpacer />
        <Button hollow color="secondary">Secondary hollow button</Button>
        <Spacer />
        Expand button:
        <Spacer />
        <ExpandButton expanded={expanded} onClick={this.handleExpandButtonClick}>
          I expand some content
        </ExpandButton>
        <Spacer />
        Disabled buttons:
        <Spacer />
        <Button disabled>Primary button</Button>
        <Spacer />
        Icon buttons:
        <Spacer />
        <IconButton icon="arrow" iconProps={{ direction: 'left' }} />
        <HorizontalSpacer />
        <IconButton icon="arrow" iconProps={{ direction: 'right' }} />
      </Fragment>
    );
  }
}

export default () => <ButtonsStory />;

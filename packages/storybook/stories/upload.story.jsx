import React, { Fragment, Component } from 'react';
import { UploadButton } from '@arborescence/components';

import { Spacer, StoryCode, StoryTitle } from './support/styledComponents';

class UploadStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  handleChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Fragment>
        <StoryTitle>File upload</StoryTitle>
        The <StoryCode>UploadButton</StoryCode> component can be used to address file uploading. It
        is ready to use with <StoryCode>redux-form</StoryCode>.
        <Spacer />
        <UploadButton
          text="Click here to upload"
          icon="folder"
          input={{ name: 'foo', value, onChange: this.handleChange }}
        />
      </Fragment>
    );
  }
}

export default () => <UploadStory />;

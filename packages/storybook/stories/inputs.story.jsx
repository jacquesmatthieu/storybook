import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Select, MultiSelect, NumberInput } from '@arborescence/components';

import { Spacer, StoryTitle, HorizontalSpacer } from './support/styledComponents';

const selectOptions = [['foo', 'Foo'], ['bar', 'Bar']];

class MultiSelectWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ['foo'],
    };
  }

  handleOnChange = value => this.setState({ value });

  render() {
    const { input } = this.props;
    const { value } = this.state;

    return (
      <MultiSelect {...this.props} input={{ ...input, value, onChange: this.handleOnChange }} />
    );
  }
}

MultiSelectWrapper.propTypes = {
  input: PropTypes.shape({}).isRequired,
};

export default () => (
  <Fragment>
    <StoryTitle>Inputs</StoryTitle>
    Basic inputs :
    <Spacer />
    <Input input={{ name: 'input1' }} meta={{}} label="Input with label" />
    <HorizontalSpacer />
    <Input input={{ name: 'input4' }} meta={{}} label="Input with placeholder" placeholder="Placeholder" />
    <HorizontalSpacer />
    <Input input={{ name: 'input2' }} meta={{}} placeholder="Input without label" />
    <HorizontalSpacer />
    <NumberInput input={{ name: 'numberInput' }} meta={{}} placeholder="Number input with unit" unit="€" />
    <Input input={{ name: 'input4' }} meta={{}} label="Full width input" fullWidth />
    <Spacer />
    Multi line input:
    <Spacer />
    <Input input={{ name: 'textarea' }} meta={{}} label="Text area" multiLine rows={3} fullWidth />
    <Spacer />
    Input states:
    <Spacer />
    <Input input={{ name: 'input5' }} meta={{}} label="Valid input" valid />
    <HorizontalSpacer />
    <Input input={{ name: 'input6' }} meta={{}} label="Input with error" error />
    <HorizontalSpacer />
    <Input input={{ name: 'input7' }} meta={{}} label="Disabled input" disabled />
    <Spacer />
    Select input:
    <Spacer />
    <Select input={{ name: 'input8' }} meta={{}} label="Select input" options={selectOptions} />
    <HorizontalSpacer />
    <Select input={{ name: 'input9' }} meta={{}} label="Valid select input" valid options={selectOptions} />
    <HorizontalSpacer />
    <Select input={{ name: 'input9' }} meta={{}} label="Select input with error" error options={selectOptions} />
    <Spacer />
    Dropdown:
    <Spacer />
    <MultiSelectWrapper input={{ name: 'multiSelect1' }} label="Multi select" options={selectOptions} meta={{}} />
    <HorizontalSpacer />
    <div id="dropdown-root" />
    <MultiSelectWrapper
      input={{ name: 'multiSelect2' }}
      label="Valid multi select"
      options={selectOptions}
      meta={{}}
      valid
    />
    <HorizontalSpacer />
    <MultiSelectWrapper
      input={{ name: 'multiSelect3' }}
      label="Multi select with error"
      options={selectOptions}
      meta={{}}
      error
    />
    <HorizontalSpacer />
    <MultiSelectWrapper
      input={{ name: 'multiSelect3' }}
      label="Disabled multi select"
      options={selectOptions}
      meta={{}}
      disabled
    />
  </Fragment>
);

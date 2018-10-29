import React, { Fragment } from 'react';
import { DatePicker, DatePickerRange, ToggleInput } from '@arborescence/components';
import { Spacer, StoryTitle, HorizontalSpacer } from './support/styledComponents';

export default () => (
  <Fragment>
    <StoryTitle> Date picker </StoryTitle>
    <Spacer />
    Simple date picker:
    <Spacer />
    <DatePicker input={{ name: 'datePicker1' }} meta={{}} label="DatePicker" />
    <HorizontalSpacer />
    <DatePicker input={{ name: 'datePicker2' }} meta={{}} label="Valid DatePicker" valid />
    <HorizontalSpacer />
    <DatePicker input={{ name: 'datePicker3' }} meta={{}} label="DatePicker with error" error />
    <HorizontalSpacer />
    <Spacer />
    Range date picker:
    <Spacer />
    <DatePickerRange
      label="DatePicker Range"
      input={{ name: 'datePicker4' }}
      meta={{}}
    />
    <Spacer />
    Toggle input:
    <Spacer />
    <ToggleInput input={{}} left="Left" right="Right" other="or" label="An awesome toggle" />
  </Fragment>
);

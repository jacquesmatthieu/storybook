import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import styled, { injectGlobal } from 'styled-components';
import { urlResolver } from '@arborescence/common';

import defaultTheme from '../../app/src/config/defaultTheme';
import ThemeSwitcher from './support/themeSwitcher.component';

import TypographyStory from './typography.story';
import ColorPaletteStory from './colorPalette.story';
import IconsStory from './icons.story';
import AppBarStory from './appBar.story';
import BreadcrumbStory from './breadcrumb.story';
import TableStory from './table.story';
import ButtonsStory from './buttons.story';
import ModalStory from './modal.story';
import InputsStory from './inputs.story';
import LabelsStory from './labels.story';
import DatepickerStory from './datepicker.story';
import GridStory from './grid.story';
import AutocompleteStory from './autocomplete.story';
import UploadStory from './upload.story';
import DataTableStory from './dataTable.story';
import MessageBlocksStory from './messageBlocks.story';
import '../../app/src/config/fonts';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    font-family: ${defaultTheme.typography.fontFamily};
    font-size: ${defaultTheme.typography.fontSize};
    color: ${defaultTheme.typography.color};
  }
`;

urlResolver.set('foogere', { path: '/foogere', parents: [] }).set('obouleau', { path: '/obouleau', parents: [] });

const Wrapper = styled.div`
  padding: 10px;
`;

addDecorator(storyFn => (
  <ThemeSwitcher>
    <Wrapper>
      {storyFn()}
    </Wrapper>
  </ThemeSwitcher>
));

storiesOf('Styles', module)
  .add('Typography', TypographyStory)
  .add('Color Palette', ColorPaletteStory)
  .add('Icons', IconsStory)
  .add('Grid', GridStory);

storiesOf('Components', module)
  .add('AppBar', AppBarStory)
  .add('Table', TableStory)
  .add('Breadcrumb', BreadcrumbStory)
  .add('Buttons', ButtonsStory)
  .add('Modal', ModalStory)
  .add('Inputs', InputsStory)
  .add('File upload', UploadStory)
  .add('Labels', LabelsStory)
  .add('Datepicker', DatepickerStory)
  .add('Autocomplete', AutocompleteStory)
  .add('Data table', DataTableStory)
  .add('Message blocks', MessageBlocksStory);

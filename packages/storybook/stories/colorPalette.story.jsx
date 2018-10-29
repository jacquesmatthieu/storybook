import React, { Fragment } from 'react';
import styled, { withTheme } from 'styled-components';
import { Spacer, StoryTitle, StoryCode } from './support/styledComponents';

const Palette = styled.div`
  display: flex;
`;

const PaletteColumn = styled.div`
  margin: 0 5px;
  flex: 1;
`;

const PaletteTile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  font-size: 16px;
  background-color: ${({ color }) => color};
  color: ${({ color, theme }) => theme.palette.getContrastText(color)};
`;

const PaletteName = styled.h2`
  text-transform: capitalize;
  font-size: 1.2rem;
  text-align: center;
`;

const PaletteVariant = styled.span`
  font-size: 16px;
`;

const PaletteTint = styled.span`
  text-transform: uppercase;
`;

const ColorPalette = withTheme(({ theme }) => (
  <Fragment>
    <StoryTitle>Color Palette</StoryTitle>
    Bellow you will find all the colors for the currently selected theme.
    They can be accessed via <StoryCode>theme.palette</StoryCode>.
    <Spacer />
    <Palette>
      {['grey', 'primary', 'secondary', 'error'].map(paletteName => (
        <PaletteColumn key={paletteName}>
          <PaletteName>{paletteName}</PaletteName>
          {['light', 'main', 'dark'].map(type => (
            <PaletteTile key={type} color={theme.palette[paletteName][type]}>
              <PaletteVariant>{type}</PaletteVariant>
              <PaletteTint>{theme.palette[paletteName][type]}</PaletteTint>
            </PaletteTile>
          ))}
        </PaletteColumn>
      ))}
    </Palette>
  </Fragment>
));

export default () => <ColorPalette />;

import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Grid } from '@arborescence/components';

import { Spacer, StoryTitle } from './support/styledComponents';

const DummyElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  background-color: ${({ color }) => color || 'rgba(0, 0, 0, 0.2)'};
`;

export default () => (
  <Fragment>
    <StoryTitle>Grid system</StoryTitle>
    The grid system provides an easy way to make responsive layouts with a column count.
    You can use up to 12 columns. {'Here\'s'} a basic example:
    <Spacer />
    <Grid container>
      <Grid item columns={1} gutter={2}><DummyElement>1</DummyElement></Grid>
      <Grid item columns={11} gutter={2}><DummyElement>11</DummyElement></Grid>
      <Grid item columns={2} gutter={2}><DummyElement>2</DummyElement></Grid>
      <Grid item columns={10} gutter={2}><DummyElement>10</DummyElement></Grid>
      <Grid item columns={3} gutter={2}><DummyElement>3</DummyElement></Grid>
      <Grid item columns={9} gutter={2}><DummyElement>9</DummyElement></Grid>
      <Grid item columns={4} gutter={2}><DummyElement>4</DummyElement></Grid>
      <Grid item columns={8} gutter={2}><DummyElement>8</DummyElement></Grid>
      <Grid item columns={5} gutter={2}><DummyElement>5</DummyElement></Grid>
      <Grid item columns={7} gutter={2}><DummyElement>7</DummyElement></Grid>
      <Grid item columns={6} gutter={2}><DummyElement>6</DummyElement></Grid>
      <Grid item columns={6} gutter={2}><DummyElement>6</DummyElement></Grid>
    </Grid>
    <Spacer />
    You can also easily nest grids like this:
    <Spacer />
    <Grid container>
      <Grid item columns={2} gutter={2}><DummyElement>2</DummyElement></Grid>
      <Grid container item columns={10}>
        <Grid item columns={6} gutter={2}><DummyElement>6</DummyElement></Grid>
        <Grid item columns={6} gutter={2}><DummyElement>6</DummyElement></Grid>
      </Grid>
    </Grid>
    <Spacer />
    Without gutters:
    <Spacer />
    <Grid container>
      <Grid item columns={2}><DummyElement color="red" /></Grid>
      <Grid item columns={5}><DummyElement color="blue" /></Grid>
      <Grid item columns={5}><DummyElement color="green" /></Grid>
    </Grid>
  </Fragment>
);

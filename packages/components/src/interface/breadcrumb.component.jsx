import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem, getSecondary } from '@arborescence/selectors';

import Typography from './typography.component';
import withCurrentApp from '../state/withCurrentApp.hoc';

const Bread = styled.div`
  margin-bottom: ${inRem(0.5)};
`;

const Crumb = styled(Typography)`
  &:not(:first-child)::before {
    display: inline-block;
    content: ' ';
    margin: ${inRem(0.5)} ${inRem(1.5)};
    border-radius: 50%;
    width: ${inRem(1)};
    height: ${inRem(1)};
    background-color: ${getSecondary};
  }
`;

const Breadcrumb = ({ currentApp, steps }) => (
  <Bread>
    {/* eslint-disable-next-line react/no-array-index-key */}
    {[currentApp.name, ...steps].map((step, i) => <Crumb key={`${step}-${i}`} variant="breadcrumb">{step}</Crumb>)}
  </Bread>
);

Breadcrumb.propTypes = {
  currentApp: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withCurrentApp(Breadcrumb);

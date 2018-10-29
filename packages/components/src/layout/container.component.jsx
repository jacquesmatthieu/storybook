import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, inRem } from '@arborescence/selectors';

import Typography from '../interface/typography.component';

const ContainerWrapper = styled.div`
  padding: ${inRem(6)} ${inRem(4)};
  border: solid 1px ${getColor('grey', 'main')};
  border-radius: ${inRem(0.8)};
  background: ${getColor('common', 'white')};
  margin-bottom: ${inRem(9)};
`;

const ContainerHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${inRem(4)};
`;

export const ContainerTitle = ({ children }) => (
  <ContainerHead>
    <Typography variant="headlineContainer">{children[0]}</Typography>
    {children.slice(1)}
  </ContainerHead>
);

ContainerTitle.defaultProps = {
  children: null,
};

ContainerTitle.propTypes = {
  children: PropTypes.node,
};

const Container = ({ children }) => (
  <ContainerWrapper>
    {children}
  </ContainerWrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;

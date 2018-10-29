import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Breadcrumb from './breadcrumb.component';
import Typography from './typography.component';

const PageHeaderWrapper = styled.div`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  align-items: flex-start;
  justify-content: ${({ centered }) => (centered ? 'center' : 'space-between')};
  margin-bottom: ${inRem(4)};
`;

const PageHeader = ({ className, steps, title, vertical, centered, children }) => (
  <PageHeaderWrapper className={className} vertical={vertical} centered={centered}>
    <div>
      <Breadcrumb steps={steps} />
      <Typography variant="headline">{title}</Typography>
    </div>
    {children}
  </PageHeaderWrapper>
);

PageHeader.defaultProps = {
  className: '',
  children: null,
  vertical: false,
  centered: false,
};

PageHeader.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
  centered: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PageHeader;

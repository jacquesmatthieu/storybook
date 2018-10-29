import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Icon from '../icons/icon.component';
import Button from './button.component';

const getColor = ({ theme, expanded }) => (expanded ? theme.palette.primary.light : theme.palette.primary.dark);

const ButtonOverride = styled(Button)`
  border-color: ${getColor};
  color: ${getColor};
  padding: ${inRem(1.4)} ${inRem(2)};
`;

const ButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExpandIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${inRem(2)};
  border-radius: ${inRem(1.5)};
  width: ${inRem(5)};
  height: ${inRem(4)};
  background-color: ${getColor};
`;

const ExpandButton = ({ expanded, children, ...otherProps }) => (
  <ButtonOverride {...otherProps} hollow expanded={expanded}>
    <ButtonInner>
      {children}
      <ExpandIcon expanded={expanded}>
        <Icon name="arrow" direction={expanded ? 'up' : 'down'} />
      </ExpandIcon>
    </ButtonInner>
  </ButtonOverride>
);

ExpandButton.defaultProps = {
  expanded: false,
};

ExpandButton.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default ExpandButton;

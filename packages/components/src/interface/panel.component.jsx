import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import styled from 'styled-components';
import { inRem, condition } from '@arborescence/selectors';
import Button from './button.component';

const Wrapper = styled.div`
  z-index: 21;
  position: absolute;
  top: calc(60px);
  right: ${condition('open', '0', '-100%')};
  width: 35%;
  height: 100%;
  padding: ${inRem(8)} ${inRem(4)};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.dropdown};
  transition: right 0.5s ease-in-out;
`;

const Close = styled(Button)`
  z-index: 22;
  position: absolute;
  top: ${inRem(6)};
  right: ${inRem(2)};
  justify-content: center;
`;

const Panel = ({ open, onClose, t, children }) => (
  <Wrapper open={open}>
    <Close data-test-id="vacationDisclaimerHideButton" onClick={onClose}>{t('panel.close')}</Close>
    {children}
  </Wrapper>
);

Panel.propTypes = {
  t: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default translate('obouleau')(Panel);

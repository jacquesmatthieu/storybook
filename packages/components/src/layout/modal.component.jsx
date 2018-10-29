import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem, getColor } from '@arborescence/selectors';

import Typography from '../interface/typography.component';
import { appBarHeight } from './appBar.component';

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${inRem(appBarHeight)};
  left: 0;
  width: 100vw;
  height: calc(100vh - ${inRem(appBarHeight)});
  z-index: 10;
  box-sizing: border-box;
`;

const ModalShade = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${getColor('background', 'modal')};
  cursor: pointer;
`;

const ModalCard = styled.div`
  position: relative;
  padding: ${inRem(7)} ${inRem(7)} ${inRem(4.5)};
  max-height: 100%;
  background: ${getColor('common', 'white')};
  overflow-y: auto;
  box-sizing: border-box;
`;

const ModalTitle = styled(Typography)`
  display: block;
  margin-bottom: ${inRem(5)};
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${inRem(5)};
`;

const modalDOMNode = document.querySelector('#modal-root');

const handleKeyDown = (onClose, disableEscapeKey) => (e) => {
  if (e.key === 'Escape' && !disableEscapeKey) {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  }
};

const Modal = ({
  open,
  title,
  portalRef,
  children,
  onClose,
  disableEscapeKey,
  ...otherProps
}) => open && ReactDOM.createPortal(
  (
    <ModalWrapper onKeyDown={handleKeyDown(onClose, disableEscapeKey)} {...otherProps}>
      <ModalShade onClick={onClose} />
      <ModalCard>
        {title && <ModalTitle variant="headline">{title}</ModalTitle>}
        {children}
      </ModalCard>
    </ModalWrapper>
  ),
  portalRef,
);

Modal.defaultProps = {
  open: false,
  title: null,
  portalRef: modalDOMNode,
  onClose() {},
  disableEscapeKey: false,
};

Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  portalRef: PropTypes.object,
  disableEscapeKey: PropTypes.bool,
};

export default Modal;

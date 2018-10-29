import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { Modal, ModalActions } from '@arborescence/components';

import { Spacer, StoryTitle } from './support/styledComponents';

const ModalContainer = styled.div`
  height: 400px;
`;

class ModalStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portalRef: null,
      modalOpened: false,
    };
  }

  createPortalRef = div => this.setState({ portalRef: div });

  handleModalToggle = () => {
    const { modalOpened } = this.state;
    this.setState({ modalOpened: !modalOpened });
  };

  render() {
    const { portalRef, modalOpened } = this.state;
    return (
      <Fragment>
        <StoryTitle>Modal</StoryTitle>
        Modal component is used to display a full page popup that renders any content:
        <Spacer />
        <button type="button" onClick={this.handleModalToggle}>Toggle modal</button>
        <Spacer />
        <ModalContainer innerRef={this.createPortalRef} />
        {portalRef && (
          <Modal
            open={modalOpened}
            onClose={this.handleModalToggle}
            title="Modal title"
            portalRef={portalRef}
          >
            I am an awesome modal text and I display over anything.
            <ModalActions>
              <span>Left action</span>
              <span>Right action</span>
            </ModalActions>
          </Modal>
        )}
      </Fragment>
    );
  }
}

export default () => <ModalStory />;

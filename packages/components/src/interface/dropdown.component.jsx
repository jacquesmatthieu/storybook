import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { condition } from '@arborescence/selectors';

export const dropdownMenuMixin = css`
  display: ${condition('open', '', 'none')};
  z-index: 21;
`;

const DropdownClose = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.el = document.querySelector('#dropdown-root');
  }

  handleToggle = (value) => {
    const { open } = this.state;
    this.setState({ open: typeof value === 'boolean' ? value : !open });
  };

  handleClose = () => this.setState({ open: false });

  handleKeyDown = (e) => {
    const { open } = this.state;
    if (open && (e.key === 'Escape')) {
      e.preventDefault();
      e.stopPropagation();
      this.handleClose();
    }
  };

  render() {
    const { children: render, ...otherProps } = this.props;
    const { open } = this.state;

    return (
      <div {...otherProps}>
        {open && <DropdownClose onClick={this.handleClose} data-test-id="dropDownClose" />}
        {render({ open, close: this.handleClose, toggle: this.handleToggle, keyDown: this.handleKeyDown })}
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Dropdown;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import styled, { ThemeProvider } from 'styled-components';
import { theme as foogere } from '@arborescence/foogere';
import { theme as obouleau } from '@arborescence/obouleau';

import defaultTheme from '../../../app/src/config/defaultTheme';

const themes = {
  foogere,
  obouleau,
};

const ThemeSelect = styled.select`
  position: absolute;
  right: 5px;
`;

class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      themeName: 'obouleau',
      theme: merge(defaultTheme, obouleau),
    };
  }

  handleThemeChange = (e) => {
    this.setState({
      themeName: e.target.value,
      theme: merge(defaultTheme, themes[e.target.value]),
    });
  };

  render() {
    const { children } = this.props;
    const { theme, themeName } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <ThemeSelect value={themeName} onChange={this.handleThemeChange}>
            <option value="foogere">Foogere</option>
            <option value="obouleau">OBouleau</option>
          </ThemeSelect>
          {children}
        </Fragment>
      </ThemeProvider>
    );
  }
}

ThemeSwitcher.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeSwitcher;

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import get from 'lodash/get';

import { Arrow, Plus, Slash, Folder, Download, Cross, Check } from './symbols.icons';
import { Search } from './actions.icons';

const iconsMapping = {
  arrow: Arrow,
  plus: Plus,
  slash: Slash,
  search: Search,
  folder: Folder,
  download: Download,
  cross: Cross,
  check: Check,
};

export const iconNames = Object.keys(iconsMapping);

const colorProps = ['stroke', 'fill'];

const Icon = ({ name, theme, ...otherProps }) => {
  const IconComponent = iconsMapping[name] || name;
  const themedProps = colorProps.reduce((acc, key) => ({
    ...acc,
    [key]: otherProps[key] && get(theme.palette, otherProps[key], otherProps[key]),
  }), {});
  return <IconComponent {...otherProps} {...themedProps} />;
};

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.object.isRequired,
  }).isRequired,
};

export default withTheme(Icon);

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, inRem } from '@arborescence/selectors';

import Icon from '../icons/icon.component';
import Typography from './typography.component';

const StyledWrapper = styled.div`
  display: inline-block;
`;

const StyledSearchBar = styled(Typography.withComponent('div'))`
  display: flex;
  align-items: center;
  border: solid 1px ${getColor('grey', 'dark')};
  border-radius: ${inRem(2)};
  padding: ${inRem(1)} ${inRem(3)};
  background-color: ${getColor('common', 'white')};
`;

const StyledSearchInput = styled.input`
  background: none;
  border: 0;
  padding: ${inRem(1.7)} ${inRem(2)} ${inRem(0.7)};
  width: ${inRem(45)};
  outline: 0;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  box-sizing: border-box;
`;

const SearchBar = ({ onChange, ...otherProps }) => (
  <StyledWrapper>
    <StyledSearchBar variant="input">
      <Icon name="search" size={20} fill="grey.dark" />
      <StyledSearchInput
        onChange={e => onChange(e.target.value)}
        {...otherProps}
      />
    </StyledSearchBar>
  </StyledWrapper>
);

SearchBar.defaultProps = {
  onChange() {},
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBar;

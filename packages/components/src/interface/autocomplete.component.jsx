import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import debounce from 'lodash/debounce';
import { getColor, inRem, condition, getShadow } from '@arborescence/selectors';

import { StyledInput } from '../forms/input.component';
import Dropdown, { dropdownMenuMixin } from './dropdown.component';
import Highlight from '../helpers/highlight.component';
import Icon from '../icons/icon.component';

const DefaultListItem = styled.li`
  padding: ${inRem(3.9)} ${inRem(3)} ${inRem(3.1)};
  background-color: ${condition('highlighted', getColor('secondary', 'light'), 'transparent')};
  list-style: none;
  cursor: pointer;
  
  &:not(:last-child) {
    border-bottom: solid 1px ${getColor('grey', 'main')};
  }
  
  &:hover {
    background-color: ${getColor('secondary', 'light')};
  }
`;

const DefaultList = styled(StyledInput.withComponent('ul'))`
  ${dropdownMenuMixin};
  position: absolute;
  margin: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-top: 0;
  padding: 0;
  height: auto;
  box-shadow: ${getShadow('dropdown')};
`;

const InputWrapper = styled.div`
  position: relative;
  z-index: 20;
`;

const DefaultStyledInput = styled(StyledInput)`
  border-bottom-left-radius: ${condition('open', 0, '')};
  border-bottom-right-radius: ${condition('open', 0, '')};
  padding-left: ${inRem(8)};
  box-shadow: ${condition('open', getShadow('dropdown'), '')};

  &:focus {
    border-color: ${condition('open', getColor('grey', 'main'), '')};
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: ${inRem(2.5)};
  left: ${inRem(2.5)};
`;

const DefaultInput = props => (
  <InputWrapper>
    <SearchIcon name="search" size={20} fill="background.dropdown" />
    <DefaultStyledInput {...props} />
  </InputWrapper>
);

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.initialQuery,
      selectedIndex: 0,
    };

    this.debouncedFetchResults = debounce(props.onFetchResults, 200);
  }

  handleQueryChange = toggle => async (e) => {
    this.setState({ value: e.target.value, selectedIndex: 0 });
    const { onChange } = this.props;
    onChange('');
    if (e.target.value.length < 3) {
      toggle(false);
      return;
    }
    toggle(true);
    this.debouncedFetchResults(e.target.value);
  };

  handleInputKeyDown = (keyDown, toggleDropdown, closeDropdown, dropdownOpened) => (e) => {
    const { results, renderResult } = this.props;
    const { selectedIndex = 0 } = this.state;
    switch (e.key) {
      case 'Tab':
        this.setState({ selectedIndex: 0 });
        closeDropdown();
        break;
      case 'ArrowUp':
        if (dropdownOpened) {
          this.setState({
            selectedIndex: selectedIndex - 1 < 0 ? results.length - 1 : selectedIndex - 1,
          });
        } else {
          toggleDropdown(true);
          this.setState({ selectedIndex: results.length - 1 });
        }
        break;
      case 'ArrowDown':
        if (dropdownOpened) {
          this.setState({ selectedIndex: selectedIndex + 1 >= results.length ? 0 : selectedIndex + 1 });
        } else {
          toggleDropdown(true);
        }
        break;
      case 'Enter':
        if (dropdownOpened && results[selectedIndex]) {
          e.preventDefault();
          this.setState({ selectedIndex: 0, value: renderResult(results[selectedIndex]) });
          this.handleChange(results[selectedIndex]);
          closeDropdown();
        }
        break;
      default:
        keyDown(e);
        break;
    }
  };

  handleChange = (result) => {
    const { onChange, getResultValue, clearAfterChange } = this.props;
    onChange(getResultValue(result), result);
    if (clearAfterChange) {
      this.setState({ value: '' });
    }
  };

  handleResultClick = (result, closeDropdown) => (e) => {
    const { renderResult } = this.props;
    e.preventDefault();
    e.stopPropagation();
    this.inputRef.focus();
    this.setState({ selectedIndex: 0, value: renderResult(result) });
    this.handleChange(result);
    closeDropdown();
  };

  getInputRef = (element) => {
    this.inputRef = element;
  };

  render() {
    const {
      inputProps,
      results,
      renderResult,
      getResultValue,
      inputComponent: Input,
      listComponent: List,
      listItemComponent: ListItem,
      autoFocus,
      'data-test-id': testId,
    } = this.props;

    const { value, selectedIndex } = this.state;

    return (
      <Dropdown data-test-id={testId}>
        {({ open, close, toggle, keyDown }) => (
          <Fragment>
            <Input
              open={open && results.length > 0}
              innerRef={this.getInputRef}
              value={value}
              onChange={this.handleQueryChange(toggle)}
              onKeyDown={this.handleInputKeyDown(keyDown, toggle, close, open)}
              autoFocus={autoFocus}
              {...inputProps}
            />
            <List open={open && results.length > 0}>
              {results.map((result, i) => (
                <ListItem
                  key={getResultValue(result)}
                  highlighted={i === selectedIndex}
                  onClick={this.handleResultClick(result, close)}
                  data-test-id="autocompleteListItem"
                >
                  <Highlight search={value} text={renderResult(result)} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        )}
      </Dropdown>
    );
  }
}

Autocomplete.defaultProps = {
  inputProps: {},
  initialQuery: '',
  inputComponent: DefaultInput,
  listComponent: DefaultList,
  listItemComponent: DefaultListItem,
  results: [],
  onChange() {},
  autoFocus: false,
  clearAfterChange: false,
};

Autocomplete.propTypes = {
  inputProps: PropTypes.shape({}),
  initialQuery: PropTypes.string,
  onChange: PropTypes.func,
  clearAfterChange: PropTypes.bool,
  onFetchResults: PropTypes.func.isRequired,
  getResultValue: PropTypes.func.isRequired,
  renderResult: PropTypes.func.isRequired,
  inputComponent: PropTypes.func,
  listItemComponent: PropTypes.func,
  listComponent: PropTypes.func,
  autoFocus: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.any),
};

export default Autocomplete;

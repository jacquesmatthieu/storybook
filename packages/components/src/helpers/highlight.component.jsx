import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const Highlight = ({ text, search }) => {
  const matches = match(text, search);
  const parts = parse(text, matches);

  return (
    <Fragment>
      {parts.map(part => (
        part.highlight
          ? <b key={`highlighted-${part.text}`}>{part.text}</b>
          : <span key={part.text}>{part.text}</span>
      ))}
    </Fragment>
  );
};

Highlight.propTypes = {
  text: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default Highlight;

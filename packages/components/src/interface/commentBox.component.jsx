import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, inRem } from '@arborescence/selectors';

import InfoBox from './infoBox.component';

const StyledCommentBox = styled.div`
  border-radius: ${inRem(1.5)};
  padding: ${inRem(3.5)} ${inRem(3.5)} ${inRem(2.5)};
  background-color: ${getColor('grey', 'light')};
`;

const CommentInfoBox = styled(InfoBox)`
  margin-bottom: 0;
`;

const CommentBox = ({ label, text, ...otherProps }) => (
  <StyledCommentBox {...otherProps}>
    <CommentInfoBox label={label} text={text} />
  </StyledCommentBox>
);

CommentBox.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CommentBox;

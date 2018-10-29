import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inRem } from '@arborescence/selectors';

import Typography from './typography.component';
import FatActionButton from './fatActionButton.component';
import InputGroup from '../forms/inputGroup.component';
import IconButton from './iconButton.component';
import { iconNames } from '../icons/icon.component';

const FileUploaded = styled.div`
  margin-top:${inRem(4)};
  font-size:${inRem(2.5)};
`;

const FileUploadedName = styled(Typography)`
  margin: 0 ${inRem(2)};
`;

const UploadButtonWrapper = FatActionButton.wrapper.withComponent('label');

const handleRemove = input => () => input.onChange(null);

const handleChange = input => (e) => {
  let file = e.target.files[0];
  if (e.nativeEvent.file) {
    const { filename, type, data } = e.nativeEvent.file;
    file = new File([data], filename, { type });
  }
  input.onChange([file]);
};

const UploadButton = ({ icon, label, accept, text, input: { value, ...input } }) => (
  <InputGroup label={label}>
    <FatActionButton
      component={UploadButtonWrapper}
      icon={icon}
      text={(
        <Fragment>
          {text}
          <input
            {...input}
            onChange={handleChange(input)}
            id={input.name}
            type="file"
            accept={accept}
            hidden
          />
        </Fragment>
      )}
      htmlFor={input.name}
    />
    {value && Array.from(value).map(file => (
      <FileUploaded key={file.name}>
        <IconButton type="button" disabled icon="folder" />
        <FileUploadedName>
          {file.name}
        </FileUploadedName>
        <IconButton type="button" icon="cross" hollow onClick={handleRemove(input)} iconProps={{ size: 8 }} />
      </FileUploaded>
    ))}
  </InputGroup>
);

UploadButton.defaultProps = {
  label: '',
  accept: 'jpg,jpeg,png,pdf',
};

UploadButton.propTypes = {
  label: PropTypes.string,
  accept: PropTypes.string,
  icon: PropTypes.oneOf(iconNames).isRequired,
  text: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default UploadButton;

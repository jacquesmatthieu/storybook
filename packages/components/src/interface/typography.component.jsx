import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';

const getVariantColor = (theme, variant) => {
  const { color } = theme.typography.variants[variant];
  return get(theme.palette, color, color);
};

const Typography = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme, variant }) => theme.typography.variants[variant].fontSize};
  font-weight: ${({ theme, variant }) => theme.typography.variants[variant].fontWeight};
  text-transform: ${({ theme, variant }) => theme.typography.variants[variant].textTransform};
  color: ${({ theme, variant }) => getVariantColor(theme, variant)};
`;

Typography.defaultProps = {
  variant: 'body',
};

Typography.propTypes = {
  variant: PropTypes.string,
};

export default Typography;

import styled from 'styled-components';
import { getColor, inRem } from '@arborescence/selectors';

import Typography from './typography.component';

export const MessageBlock = styled(Typography)`
  display: block;
  border-radius: ${inRem(1)};
  margin-top: ${inRem(4)};
  padding: ${inRem(4.4)} ${inRem(4)} ${inRem(3.6)};
  overflow-x: auto;
`;

export const InfoBlock = styled(MessageBlock)`
  border: solid 1px ${getColor('primary', 'main')};
  background-color: ${getColor('secondary', 'light')};
  color: ${getColor('primary', 'dark')};
`;

export const WarningBlock = styled(MessageBlock)`
  border: solid 1px ${getColor('warning', 'main')};
  background-color: ${getColor('warning', 'light')};
  color: ${getColor('warning', 'dark')};
`;

export const ErrorBlock = styled(MessageBlock)`
  border: solid 1px ${getColor('error', 'main')};
  background-color: ${getColor('error', 'light')};
  color: ${getColor('error', 'dark')};
`;

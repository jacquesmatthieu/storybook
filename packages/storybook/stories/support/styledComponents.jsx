import styled from 'styled-components';

export const Spacer = styled.div`
  margin-bottom: ${({ large }) => (large ? '100px' : '20px')};
`;

export const HorizontalSpacer = styled.span`
  margin-right: 10px;
`;

export const StoryTitle = styled.h1`
  margin: 0 0 15px;
`;

export const StoryCode = styled.code`
  border: solid 1px #d6d6d6;
  border-radius: 3px;
  padding: 0 3px;
  background:#fafafa;
  color: #850000;
`;

export const ExampleBox = styled.div`
  margin: 20px 0;
  border: solid 1px #d6d6d6;
  border-radius: 3px;
  padding: 10px;
  background: ${({ theme }) => theme.palette.background.default};
`;

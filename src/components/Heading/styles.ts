import styled, { css } from 'styled-components';

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.font.color.primary};
    font-size: ${theme.font.sizes[44]};
  `}
`;

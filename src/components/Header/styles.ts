import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings[20]} 20rem;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes[20]};
    color: ${theme.font.color.primary};
    border: 0;
    background: none;
    cursor: pointer;
  `}
`;

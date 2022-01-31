import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 33rem;
    background: ${theme.colors.cardColor};
    border-radius: ${theme.border.medium};

    ${theme.utils.pAll(theme.spacings[12])}
  `}
`;

export const CardImage = styled.div`
  img {
    width: 100%;
  }
`;

export const CardTitle = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes[16]};

    ${theme.utils.py(theme.spacings[12])}
  `}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const FavoriteButton = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: none;
    margin-right: ${theme.spacings[16]};
    cursor: pointer;
  `}
`;

export const DetailsButton = styled.button`
  ${({ theme }) => css`
    height: 4rem;
    font-family: ${theme.font.family};
    width: 100%;
    cursor: pointer;
    background: ${theme.colors.primary};
    border-radius: ${theme.border.medium};
    border: 0;
    color: ${theme.font.color.primary};
  `}
`;

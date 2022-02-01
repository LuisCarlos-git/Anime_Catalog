import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root, body {
    height: 100vh;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.family};
    }

    button {
      font-family: ${theme.font.family};
    }
  `}
`;

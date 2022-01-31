import { screen } from '@testing-library/react';
import styled, { css } from 'styled-components';
import { renderWithTheme } from '.';

const TestRenderWithStyledTheme = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

describe('renderWithTheme', () => {
  it('should render component correctly using theme passed by ThemeProvider', () => {
    renderWithTheme(
      <TestRenderWithStyledTheme>
        Test render using theme
      </TestRenderWithStyledTheme>
    );

    const element = screen.getByRole('heading', {
      name: /Test render using theme/i,
    });

    expect(element).toHaveStyle({
      color: '#0D102B',
    });
  });
});

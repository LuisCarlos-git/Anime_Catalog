import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';

describe('<Heading />', () => {
  it('should render is correctly', () => {
    renderWithTheme(<Heading>Top mangas</Heading>);

    expect(
      screen.getByRole('heading', { name: /top mangas/i })
    ).toBeInTheDocument();
  });
});

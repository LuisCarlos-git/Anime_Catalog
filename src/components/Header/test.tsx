import { screen } from '@testing-library/react';
import { Header } from '.';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';

describe('<Header />', () => {
  it('should render button of favorite menu', () => {
    renderWithTheme(<Header />);

    const element = screen.getByRole('button', { name: /favorite/i });

    expect(element).toBeInTheDocument();
  });
});

import { screen } from '@testing-library/react';
import { Card, CardProps } from '.';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';

const props: CardProps = {
  cardImage: 'image/test',
  cardTitle: 'Black clover',
  onFav: jest.fn(),
  favorite: false,
};

describe('<Heading />', () => {
  it('should render img correctly', () => {
    renderWithTheme(<Card {...props} />);

    const element = screen.getByRole('img', { name: /black clover/i });

    expect(element).toHaveAttribute('src', 'image/test');
  });
});

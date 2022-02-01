import { fireEvent, screen } from '@testing-library/react';
import { Card, CardProps } from '.';
import { renderWithTheme } from '../../helpers/tests/renderWithTheme';

const props: CardProps = {
  cardImage: 'image/test',
  cardTitle: 'Black clover',
  onFav: jest.fn(),
  favorite: false,
};

describe('<Card />', () => {
  it('should render img and title is correctly', () => {
    renderWithTheme(<Card {...props} />);

    const img = screen.getByRole('img', { name: /black clover/i });
    const title = screen.getByText(/black clover/i);

    expect(img).toHaveAttribute('src', 'image/test');
    expect(title).toBeInTheDocument();
  });

  it('should call onFav on click', () => {
    const onFav = jest.fn();

    renderWithTheme(<Card {...props} onFav={onFav} />);

    fireEvent.click(screen.getByLabelText('favorite button'));

    expect(onFav).toHaveBeenCalledTimes(1);
  });

  it('shold render fill heart if favorite true', () => {
    renderWithTheme(<Card {...props} favorite={true} />);

    expect(screen.getByLabelText('favorite')).toBeInTheDocument();
    expect(screen.queryByLabelText('not favorite')).not.toBeInTheDocument();
  });
});

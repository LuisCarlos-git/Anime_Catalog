import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { Card, CardProps } from '.';

export default {
  title: 'Card',
  component: Card,
} as Meta;

export const Default: Story<CardProps> = args => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Card
      {...args}
      onFav={() => setFavorite(prevState => !prevState)}
      favorite={favorite}
    />
  );
};
Default.args = {
  cardImage:
    'https://ptanime.com/wp-content/uploads/2020/04/Black-Clover-manga-volume-24-cover-art-capa-3-abril-2020-647x1024.jpg',
  cardTitle: 'Black clover',
};

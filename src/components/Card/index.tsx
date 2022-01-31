import { FavoriteBorder, Favorite } from '@styled-icons/material';

import * as Styled from './styles';

export type CardProps = {
  cardImage: string;
  cardTitle: string;
  favorite: boolean;
  onFav: () => void;
};

export const Card = ({ cardImage, cardTitle, favorite, onFav }: CardProps) => (
  <Styled.Wrapper>
    <Styled.CardImage>
      <img src={cardImage} alt={cardTitle} />
    </Styled.CardImage>
    <Styled.CardTitle>{cardTitle}</Styled.CardTitle>
    <Styled.ButtonsWrapper>
      <Styled.FavoriteButton aria-label="favorite button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="favorite" size={30} color="#AA0202" />
        ) : (
          <FavoriteBorder size={30} aria-label="not favorite" />
        )}
      </Styled.FavoriteButton>
      <Styled.DetailsButton>Details</Styled.DetailsButton>
    </Styled.ButtonsWrapper>
  </Styled.Wrapper>
);

import * as Styled from './styles';

export type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => (
  <Styled.Heading>{children}</Styled.Heading>
);

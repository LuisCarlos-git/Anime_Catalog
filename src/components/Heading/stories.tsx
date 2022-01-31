import { Story, Meta } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

type StoryType = Story<HeadingProps>;

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

export const Default: StoryType = args => <Heading {...args} />;

Default.args = {
  children: 'Top mangas',
};

import { fn } from '@storybook/test';
import { Button, ButtonProps } from './button';
import { JSX } from 'react/jsx-runtime';

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Button,
  title: 'Molecules/Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  render: (args: JSX.IntrinsicAttributes & ButtonProps) => (
    <Button {...args}>A test button</Button>
  ),
};

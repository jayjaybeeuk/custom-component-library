import { fn } from '@storybook/test';
import { Button, ButtonProps } from './Button';
import { JSX } from 'react/jsx-runtime';
import React from 'react';

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Button,
  title: 'Button',
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

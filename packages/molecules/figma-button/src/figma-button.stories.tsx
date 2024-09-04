import { FigmaButton, FigmaButtonProps } from './figma-button';
import { JSX } from 'react/jsx-runtime';
import React from 'react';

export const ActionsData: FigmaButtonProps = {
  text: 'A test button',
};

export default {
  component: FigmaButton,
  title: 'Molecules/Figma Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  render: (args: JSX.IntrinsicAttributes & FigmaButtonProps) => (
    <FigmaButton {...args} />
  ),
};

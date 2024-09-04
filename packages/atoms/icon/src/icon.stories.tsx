import { fn } from '@storybook/test';
import { Icon, IconProps } from './icon';
import { JSX } from 'react/jsx-runtime';

export const iconProps:IconProps = {
  name: 'Activity',
  size: 'md',
};

export default {
  component: Icon,
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...iconProps,
  },
};

export const Default = {
  render: (args: JSX.IntrinsicAttributes & IconProps) => (
    <Icon {...args} />
  ),
};

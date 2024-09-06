import { Icon, IconProps } from '../icon';
import { JSX } from 'react/jsx-runtime';

export const Icons: IconProps = {
  name: 'Activity',
  size: 'md',
};

export default {
  component: Icon,
  title: 'Atoms/Icon/DefaultTheme',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...Icons,
  },
};

export const Default = {
  render: (args: JSX.IntrinsicAttributes & IconProps) => <Icon {...args} />,
};

import { fn } from '@storybook/test';
import { ThemeProvider } from '@jayjaybeeuk/theming';
import { Button, ButtonProps } from '../button';
import { JSX } from 'react/jsx-runtime';
import { RefAttributes } from 'react';

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Button,
  title: 'Molecules/Button/CustomTheme1',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
  argTypes: {
    variant: { control: 'button', options: ['dropdown', 'ghost-blank'] },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This is a **CustomTheme1** button component with different variants and themes. For this example we have only overloaded one colour var, which is **--pink**, to a brighter variant.',
      },
    },
  },
};

const themeOverride = {
  pink: '#ff00ff',
};

export const Default = {
  render: (args: JSX.IntrinsicAttributes & ButtonProps) => (
    <ThemeProvider scopedName="defaultThemeOverride" theme={themeOverride}>
      <Button {...args}>A test button</Button>
    </ThemeProvider>
  ),
};

export const AllCombinations = (
  args: JSX.IntrinsicAttributes &
    ButtonProps &
    RefAttributes<HTMLButtonElement>,
) => {
  const variants: ButtonProps['variant'][] = [
    'default',
    'positive',
    'negative',
    'grey',
    'grey-red',
    'dropdown',
    'ghost-default',
    'ghost-positive',
    'ghost-black',
    'black',
    'pink-red',
  ];
  const paddings: ButtonProps['padding'][] = [
    'square',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ];

  return (
    <>
      {variants.map(variant =>
        paddings.map(padding => (
          <ThemeProvider
            key={`${variant}-${padding}`}
            scopedName={`${variant}-${padding}`}
            theme={themeOverride}
          >
            <Button {...args} variant={variant} padding={padding}>
              {`${variant} ${padding}`}
            </Button>{' '}
            <Button {...args} variant={variant} padding={padding} isDisabled>
              {`${variant} ${padding} disabled`}
            </Button>{' '}
            <br />
            <br />
          </ThemeProvider>
        )),
      )}
    </>
  );
};

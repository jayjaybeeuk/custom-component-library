import { fn } from '@storybook/test';
import { ThemeProvider } from '@jayjaybeeuk/theming';
import { Button, ButtonProps } from '../button';
import { JSX } from 'react/jsx-runtime';

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Button,
  title: 'Molecules/Button/DefaultTheme',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Default = {
  render: (args: JSX.IntrinsicAttributes & ButtonProps) => (
    <ThemeProvider scopedName="defaultTheme">
      <Button {...args}>A test button</Button>
    </ThemeProvider>
  ),
};

export const AllCombinations = (
  args: JSX.IntrinsicAttributes & ButtonProps,
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

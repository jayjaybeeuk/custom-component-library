import React from 'react';
import { Button as RadixButton, type ButtonProps } from '@radix-ui/themes';

const Button: React.FC<ButtonProps> = props => {
  return <RadixButton {...props} />;
};
export { Button };
export type { ButtonProps };

import React from 'react';
import { Button as RadixButton, type ButtonProps } from '@radix-ui/themes';

export const Button: React.FC<ButtonProps> = props => {
  return <RadixButton {...props} />;
};

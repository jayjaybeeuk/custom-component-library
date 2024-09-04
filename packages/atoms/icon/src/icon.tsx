import * as icons from 'react-feather';

import type { ClassNameProps } from '@jayjaybeeuk/types';
import clsx from 'clsx';
import styles from './style.module.css';

export type IconName = keyof typeof icons;

export interface IconProps extends ClassNameProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
}

const SIZES = {
  lg: '22px',
  md: '18px',
  sm: '16px',
};

export const Icon = ({ name, size = 'md', className }: IconProps) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      size={SIZES[size]}
      className={clsx(styles.root, className)}
      data-testid="icon"
    />
  );
};

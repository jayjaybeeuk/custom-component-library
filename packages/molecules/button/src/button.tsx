import { Icon } from '@jayjaybeeuk/atoms-icon';
import { StartEndIconProps } from '@jayjaybeeuk/types';
import { Button as RadixButton, Text } from '@radix-ui/themes';
import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './style.module.css';


export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    StartEndIconProps {
  variant?:
    | 'default'
    | 'positive'
    | 'negative'
    | 'grey'
    | 'grey-red'
    | 'dropdown'
    | 'ghost-default'
    | 'ghost-positive'
    | 'ghost-black'
    | 'black'
    | 'pink-red';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'square';
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      variant = 'default',
      className,
      children,
      startIconName,
      endIconName,
      padding = 'md',
      isDisabled = false,
      isLoading = false,
      loadingText = 'Loading',
      ...props
    },
    ref,
  ) => (
    <RadixButton
      className={clsx(className, styles[variant], styles[padding], styles.root)}
      ref={ref}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Icon name="Loader" className="animate-spin" />
          {loadingText}
        </>
      ) : (
        <>
          {startIconName && <Icon name={startIconName} />}
          <Text size="3">{children}</Text>
          {endIconName && (
            <Icon
              name={endIconName}
              className={clsx({
                'ml-auto': variant === 'dropdown',
              })}
            />
          )}
        </>
      )}
    </RadixButton>
  ),
);

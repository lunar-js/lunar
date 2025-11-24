import { type ComponentProps, type FC } from 'react';
import clsx from 'clsx';
import { input } from './input.css.js';

const Input: FC<ComponentProps<'input'>> = ({ className, ...props }) => {
  return <input data-slot="input" className={clsx(input, className)} {...props} />;
};

export default Input;

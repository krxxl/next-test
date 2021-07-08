import React from 'react';
import {PProps} from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({size = 'normal', children, className, ...props}: PProps): JSX.Element => {
  return <p className={cn(styles.p, className, {
    [styles.big]: size === 'big',
    [styles.normal]: size === 'normal',
    [styles.small]: size === 'small',
  })} {...props}>{children}</p>
};
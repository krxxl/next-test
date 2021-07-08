import React from 'react';
import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size = 'normal', children, color='ghost', href, className, ...props}: TagProps): JSX.Element => {
  return <div className={cn(styles.tag, className, {
    [styles.big]: size === 'big',
    [styles.normal]: size === 'normal',
    [styles.ghost]: color === 'ghost',
    [styles.primary]: color === 'primary',
    [styles.green]: color === 'green',
    [styles.red]: color === 'red',
    [styles.grey]: color === 'grey',
  })} {...props}>{href ? <a href={href}>{children}</a> : <>{children}</>}</div>

};
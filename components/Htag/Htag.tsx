import React from 'react';
import {HtagProps} from "./Htag.props";
import styles from './Htag.module.css'

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
  return tag==='h1' ? <h1 className={styles.h1}>{children}</h1> : tag==='h2' ? <h2 className={styles.h2}>{children}</h2> : <h3 className={styles.h3}>{children}</h3>
};
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode;
  size?: 'big' | 'normal';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary'
  href?: string
}
import React, {FC} from 'react';
import {LayoutProps} from "./Layout.props";
import styles from './Layout.module.css';
import cn from 'classnames';
import {Sidebar} from "Layout/Sidebar/Sidebar";
import {Header} from "Layout/Header/Header";
import {Footer} from "Layout/Footer/Footer";

export const Layout = ({children}: LayoutProps): JSX.Element => {
  return <div className='grid'>
    <Header/>
    <div>
      <Sidebar/>
      <div>
        {children}
      </div>
    </div>
    <Footer/>
  </div>
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return <Layout>
      <Component {...props}/>
    </Layout>
  }
};
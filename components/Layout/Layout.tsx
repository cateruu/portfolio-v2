import React from 'react';
import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

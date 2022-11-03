import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

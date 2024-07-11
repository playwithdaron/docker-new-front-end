import React from 'react';
import SideBar from './sidebar/SideBar';
import './Layout.scss';
import Header from './Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='layout_container'>
      <Header />
      <SideBar />
      {children}
    </div>
  );
}

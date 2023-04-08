import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import React from 'react'

interface LayoutProps{
    children: JSX.Element;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
    <Header />
      <main>
       {children}
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
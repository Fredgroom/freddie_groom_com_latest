import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Background from '@/components/Background';
import Content from '@/components/Content';

type RootLayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

const RootLayout = ({ children, pageTitle }: RootLayoutProps) => {
  return (
    <Background>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} | FreddieGroom.com` : 'FreddieGroom.com'}
        </title>
        <meta
          name='Freddie Groom . com'
          content='This is an example site using Next.js'
        />
        {/* Add any global tags you want to include in every page */}
      </Head>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Background>
  );
};

export default RootLayout;

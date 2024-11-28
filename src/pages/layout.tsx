import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider.tsx';

type RootLayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

const RootLayout = ({ children, pageTitle }: RootLayoutProps) => {
  return (
    <>
      <Head>
        <title>
          {pageTitle ? `${pageTitle} | FreddieGroom.com` : 'FreddieGroom.com'}
        </title>
        <meta
          name='Freddie Groom . com'
          content='This is an example site using Next.js'
        />
      </Head>
      <body className='bg-secondary'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </>
  );
};

export default RootLayout;

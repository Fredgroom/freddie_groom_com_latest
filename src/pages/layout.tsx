import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

type RootLayoutProps = {
  children: ReactNode;
  pageTitle?: string;
};

const RootLayout = ({ children, pageTitle }: RootLayoutProps) => {
  return (
    <div className='min-h-full flex flex-col justify-between overflow-x-hidden'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          {pageTitle
            ? `${pageTitle} | FreddieGroom.com`
            : 'Portfolio | FreddieGroom.com'}
        </title>
        <meta
          name='Freddie Groom . com'
          content='This is an example site using Next.js'
        />
      </Head>
      <ThemeProvider
        attribute='class'
        //todo: change default theme to system with better light theme
        defaultTheme='dark'
        enableSystem={false}
        disableTransitionOnChange
      >
        <Header />
        <div className='px-4 flex column justify-center items-center'>
          {children}
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default RootLayout;

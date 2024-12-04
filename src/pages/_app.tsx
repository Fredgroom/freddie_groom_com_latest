import { AppProps } from 'next/app';
import { FC } from 'react';
import RootLayout from './layout';
import './globals.css';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  style: 'normal',
  preload: true,
});
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
};

export default MyApp;

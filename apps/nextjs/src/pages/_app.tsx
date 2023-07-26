import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import '@nx-nextjs/shared/assets/styles/fonts.scss';
import '@nx-nextjs/shared/assets/styles/tailwind.scss';
import '@nx-nextjs/shared/assets/styles/global.scss';
import 'swiper/css';

export const CustomApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Head>
        <title>Welcome to nextjs!</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
          <Link href="/about">GO TO ABOUT</Link>
        </main>
      </div>
    </>
  );
};

export default CustomApp;

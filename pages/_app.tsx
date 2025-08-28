import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/jpeg" href="/assets/logo.jpg" />
        <link rel="apple-touch-icon" href="/assets/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a1a" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

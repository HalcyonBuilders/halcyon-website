import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';

import { Navbar } from '../components/NavBar/Navbar';
import { Footer } from '../components/Footer/Footer';
import LoadingPage from '../components/Loading/LoadingPage';
import '../styles/globals.css';

import { Chain, EthosConnectProvider } from 'ethos-connect';

const WalletKitProvider = dynamic(
  () => import('@mysten/wallet-kit').then((mod) => mod.WalletKitProvider),
  {
    ssr: false,
    loading: LoadingPage
  }
);

export default function App({
  Component,
  pageProps
}: AppProps<{
  initialSession: Session;
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/') {
        document.body.className = 'bg-black'; // main page background
      } else if (url === '/dispenser') {
        document.body.className = 'bg-white'; // dispenser page background
      } else {
        document.body.className = 'bg-black'; // default background for other pages
      }
    };

    handleRouteChange(router.pathname);
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <title>Halcyon</title>
    </Head>
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}>
      <Navbar />
      <EthosConnectProvider
        ethosConfiguration={{
          chain: Chain.SUI_TESTNET,
          network: 'https://sui-testnet.nodeinfra.com/', // Optional. Defaults to https://fullnode.devnet.sui.io/ 
          hideEmailSignIn: true // Optional.  Defaults to false
        }}
      >
        <Component {...pageProps} />
      </EthosConnectProvider>
      <Footer />
    </SessionContextProvider>
    </>
  );
}

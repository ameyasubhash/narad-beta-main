import React from 'react';
import { useClient } from 'next/bridge';
import './app/globals.css'; // Update the path for styles

function MyApp({ Component, pageProps }) {
  useClient(); // Mark the entire application as a Client Component
  return <Component {...pageProps} />;
}

export default MyApp;
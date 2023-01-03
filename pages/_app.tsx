import '../styles/globals.css';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';

const fink = localFont({
  src: './fonts/FinkHeavy.woff',
  variable: '--font-fink-bold',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main className={fink.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

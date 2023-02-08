import '../styles/globals.css';
import localFont from '@next/font/local';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-tailwind/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const fink = localFont({
    src: './fonts/FinkHeavy.woff',
    variable: '--font-fink-bold',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <main className={fink.className}>
                <Component {...pageProps} />
                <Footer />
            </main>
        </ThemeProvider>
    );
}

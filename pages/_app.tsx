import '../styles/globals.css';
import '../i18n';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;

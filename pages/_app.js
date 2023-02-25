import 'styles/globals.css';
import { useRouter } from 'next/router';
import i18n from 'config/i18n';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.locale) {
    i18n.changeLanguage(router.locale);
  }

  return <Component {...pageProps} __={i18n.t} />;
}

import 'styles/globals.css';
import { useRouter } from 'next/router';
import i18n from 'config/i18n';
import { Provider } from 'react-redux';
import store from 'states';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.locale) i18n.changeLanguage(router.locale);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

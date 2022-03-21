import '../styles/globals.css'
import '../styles/application.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import { useEffect } from 'react'
import { Provider } from 'react-redux';
import store from '../redux/store'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={store}>
      <Script src="http://code.jquery.com/jquery-1.10.2.js"></Script>
      <Script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></Script>
      <Script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></Script>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

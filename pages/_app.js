import '../styles/globals.css'
import '../styles/application.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default MyApp

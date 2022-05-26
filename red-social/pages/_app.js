import { Provider } from 'react-redux'
import Page from '../components/Page'
import store from '../redux/store'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </Provider>
}

export default MyApp

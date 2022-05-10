import '../styles/globals.css'
import {Provider} from 'react-redux'
import store from '../redux/store'
import Page from '../components/Page'


function MyApp({ Component, pageProps }) {

  
  return <Provider store={store}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </Provider>
}

export default MyApp

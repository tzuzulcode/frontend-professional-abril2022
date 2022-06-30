import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import Page from '../components/Page'

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return <SessionProvider session={session}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </SessionProvider>
}

export default MyApp

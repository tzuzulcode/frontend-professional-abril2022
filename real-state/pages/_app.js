import '../styles/globals.css'
import {SessionProvider} from 'next-auth/react'
import Page from '../components/Page'
import { ApolloProvider } from '@apollo/client'
import client from '../graphql/client'

function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return <SessionProvider session={session}>
    <ApolloProvider client={client}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  </SessionProvider>
}

export default MyApp

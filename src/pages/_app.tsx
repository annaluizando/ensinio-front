import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/app/styles/index'

import { Inter } from 'next/font/google'
import GlobalStyles from '@/app/styles/GlobalStyles'
import Head from 'next/head'


const inter = Inter({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ensinio Front</title>
        <meta name="description" content="Sua escola online poderosa e lucrativa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>

      <GlobalStyles />
    </ThemeProvider>
  )
}

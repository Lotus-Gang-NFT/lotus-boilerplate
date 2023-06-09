import type { AppProps } from 'next/app'
import Theme from '../components/Theme'
import LoadingCursor from '../components/LoadingCursor'

import '../styles/globals.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <>
        <LoadingCursor />
        <Component {...pageProps} />
      </>
    </Theme>
  )
}

export default MyApp

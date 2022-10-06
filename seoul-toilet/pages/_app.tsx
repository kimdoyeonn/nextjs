import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=61b5541618ba489c12127ce95ed343d8&libraries=services,clusterer&autoload=false"
      strategy="beforeInteractive"
    />
    <Component {...pageProps} />
  </>
}

export default MyApp

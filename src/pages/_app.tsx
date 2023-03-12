import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <div id='layout'>
      <div id='content'>
        <Component {...pageProps} />
      </div>
    </div>
    <div id='drawer' />
    <div id='modal' />
  </div>
}

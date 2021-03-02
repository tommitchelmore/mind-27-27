import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin='true' />

        <link rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Patrick+Hand&display=swap" />

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Patrick+Hand&display=swap"
          media="print" onLoad="this.media='all'" />
          
        <noscript>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Patrick+Hand&display=swap" />
        </noscript>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

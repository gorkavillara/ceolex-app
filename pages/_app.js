import '../styles/globals.css'
import Head from "next/head"
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <div className="page">
    <Head>
      <title>Ceolex 🐦</title>
      <meta name="description" content="Ceolex - La justicia llevada a tu mano" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp

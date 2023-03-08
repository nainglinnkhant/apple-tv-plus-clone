import Head from 'next/head'
import { Inter } from '@next/font/google'

import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Value from '../components/Value'
import Offers from '../components/Offers'
import Shows from '../components/Shows'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Apple TV+ -Apple</title>
        <meta
          name='description'
          content='Apple TV+ is a streaming service featuring Apple Originals'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main>
        <Landing />

        <Value />

        <Offers />

        <Shows />
      </main>
    </div>
  )
}

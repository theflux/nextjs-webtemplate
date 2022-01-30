import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { DatePicker } from 'antd';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flux Art NFT Marketplace </title>
        <meta name="description" content="Multi-chain Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FluxArt NFT Marketplace
        </h1>

      
        <div><DatePicker>
          </DatePicker></div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with
          <span className={styles.logo}>
            <Image src="/stubparrot.gif" alt="Stub Parrot" width={32} height={32} />
          </span>
          & not 
        </a>
      </footer>
    </div>
  )
}

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gray-200" className={styles.main}>
      <Head>
        <title>Simplified Immersion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://simplifiedimmersion.com">Simplified Immersion!</a>
        </h1>

        <p className={styles.description}>
          There is a ton of excellent community content out there in the immersion learning community.
          <br />Our goal is to provide the most simplified guide to getting started.
        </p>

        <div className={styles.card}>
          <Link href="/japanese" className={styles.card}>
            <a>
              <h3>Japanese - 日本語 &rarr;</h3>
              <br />
              <Image
                src="/jp-flag.png"
                alt="Picture of Japan's flag"
                width={300}
                height={200}
              />
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

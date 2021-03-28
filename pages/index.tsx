import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Proswitch</title>
        <meta
          name="description"
          content="A status bar Mac application to seamlessly switch between Chrome profiles."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="https://github.com/alvesjtiago/proswitch/releases/download/v1.0.0/Proswitch-darwin-x64-1.0.0.zip">
          <img
            src="/switcher.svg"
            alt="Prowswitch Command"
            className={styles.logo}
          />
          <h1 className={styles.title}>Proswitch</h1>
          <p>Mac app to seamlessly switch between Chrome profiles.</p>
        </a>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://www.tiagoalves.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Tiago Alves.
        </a>
        &nbsp;
        <a
          href="https://github.com/alvesjtiago/proswitch"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source.
        </a>
      </footer>
    </div>
  )
}

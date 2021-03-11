import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Japanese() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Japanese</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <article className="prose lg:prose-xl">
                    <h1>Getting Started with Japanese</h1>

                    <p>
                        This is a simplified starting guide for learning Japanese.  We will focus on the shortest amount of steps to get you started on your Japanese language learning.
                    </p>

                    <h2>0. Anki</h2>
                    <p>
                        Anki is a really powerful flashcard system that will be super useful in your language learning journey.  While its core functionality is simple, it's HIGHLY customized, and can be compelx at times.  For getting started we'll try and keep the setup simple.
                    </p>

                    <h2>1. Hiragana</h2>
                    <p>
                        This is the basic alphabet for Japanese.  It's best to start out by memorizing each of the characters and their sounds at least moderately well.  This will make the rest of the learning journey much easier!
                    </p>

                    <h2>1a. Katakana</h2>
                    <p>
                        Katakana is just like Hiragana, except its used for "foreign" words, and the characters look somewhat similar, to very different.  The sounds in Katakana are the same as they are in Hiragana, but their use is different.
                    </p>

                    <h2>2. JLPT N5 Anki Deck</h2>
                    <p>
                        Essentially start doing this deck daily: https://ankiweb.net/shared/info/1679429599<br />
                        If you do 10 new cards daily, you'll be done with new cards in just over 3 months.
                    </p>

                </article>


            </main>

            <footer className={styles.footer}>

            </footer>
        </div >
    )
}

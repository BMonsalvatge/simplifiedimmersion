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
                        This is a simplified starting guide for learning Japanese.  We will focus on the shortest amount of steps to get you started on your Japanese language learning.  Some steps will be listed as optional, or are generally less important.  The most important part is you getting started learning. Even if all the tools and techniques aren't 100% optimized, you can still be successful in language learning.
                    </p>

                    <h2>0. Anki</h2>
                    <p>
                        Anki is a really powerful flashcard system that will be super useful in your language learning journey.   While its core functionality is simple, it's HIGHLY customized, and can be complex at times.  For getting started we'll try and keep the setup simple.

                        You can download the desktop version here: <a href="https://apps.ankiweb.net/">Anki Desktop</a>.

                        While having a mobile app is optional, I find it very useful.  There's an unofficial version for android that is free and very popular:  <a href="https://play.google.com/store/apps/details?id=com.ichi2.anki&hl=en_US&gl=US">AnkiDroid for Android</a>.

                        There's an Official iOS version, however it does costs $25.  If you're going to be spending the majority of your time studying using your mobile device, I <b>highly</b> recommend this version specifically: <a href="https://apps.apple.com/us/app/ankimobile-flashcards/id373493387">AnkiMobile for iOS</a>.
                    </p>

                    <h3>Anki Customization (optional, though recommended)</h3>
                    <p>
                        There are some great recommendations made here: <a href="https://refold.la/roadmap/stage-1/a/anki-setup#Recommended-Options-Settings">https://refold.la/roadmap/stage-1/a/anki-setup#Recommended-Options-Settings</a> on some recommended options for setting up anki.  There's a bit of useful reading there, but I would just focus on the 4 screenshots under the Recommended Options Settings section, and not worrying too much about the rest for now.
                    </p>

                    <h3>"Low-key" Anki</h3>
                    <p>
                        Throughout this guide and language learning process, we recommend only using the "again" and "good" buttons when grading your flashcards.  More reading about that can be found here: <a href="https://refold.la/roadmap/stage-1/a/anki-setup#Recommended-Options-Settings">Low-key Anki</a>
                    </p>

                    <h2>1. Hiragana and Katakana</h2>

                    <h3>Hiragana</h3>
                    <p>
                        This is the basic alphabet for Japanese.  It's best to start out by memorizing each of the characters and their sounds at least moderately well.  This will make the rest of the learning journey much easier!

                        There's a lot of differente Hiragana tools out there, as well as <a href="https://www.amazon.com/Hiragana-Katakana-Flashcards-Japanese-Mnemonics/dp/B07D2M1VHG/ref=sr_1_3?crid=LCNPFZET2OR7&dchild=1&keywords=hiragana+flash+cards&qid=1615520604&sprefix=hiragana%2Caps%2C190&sr=8-3">physical flashcards</a> but for a simple anki deck: <a href="https://ankiweb.net/shared/info/195754716">https://ankiweb.net/shared/info/195754716</a>.  You can download this file and double click (or open on mobile) and it will add right into Anki!
                    </p>

                    <h3>Katakana</h3>
                    <p>
                        Katakana is just like Hiragana, except its used for "foreign" words, and the characters look somewhat similar, to very different.  The sounds in Katakana are the same as they are in Hiragana, but their use is different.  I've found a lot of people will skip on Katakana and pick it up as they go.  You can choose to skip it for now, but you will likely need to revist it at somepoint to learn it (I personally didn't learn katakana at first and did find myself stuck at a certain point and went back and just powered through it in a couple days).

                        An anki deck for Katakana can be setup just the same as our Hiragana deck: <a href="https://ankiweb.net/shared/info/183933952">https://ankiweb.net/shared/info/183933952</a>
                    </p>

                    <h2>2. JLPT N5 Level Stuff</h2>
                    <p>Once you have at least Hiragana down, you can start your journey into N5 level vocab.  There will be some Katakana that does come up, but refer to our notes above on Katakana if you haven't learned it yet.</p>

                    <h3>N5 Level Vocab</h3>
                    <p>
                        Essentially start doing this deck daily: https://ankiweb.net/shared/info/1679429599<br />
                        If you do 10 new cards daily, you'll be done with new cards in just over 3 months.
                    </p>
                    <h3>RRTK - Remembering the Kanji</h3>
                    <p>
                        Remember the Kanji is a technique that helps to turn Kanji from hieroglyphics and make them comprehensible.  There's a lot of write-ups on the subject, but I would recommend just doing the basic 450 card deck, which should serve the purpose of making Kanji comprehensible.  If you do 5 a day alongside the N5 deck above, you'll be done in about 3 months, and it will probably take around 30 minutes a day (or less depending on how quick you go through them)!

                        <a href="https://mega.nz/file/6skmAQQY#iFR7kkJSUy64QsFY1G8ixRIk9z_yvbG6yEfWvTu8Jl4">Download the RRTK Deck Here</a>
                    </p>


                </article>


            </main>

            <footer className={styles.footer}>

            </footer>
        </div >
    )
}

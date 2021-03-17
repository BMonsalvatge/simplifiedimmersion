import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Japanese() {
    return (
        <div className="bg-gray-200">
            <Head>
                <title>Japanese</title>
                <link rel="icon" href="/favicon.ico" />
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=[G-ZL8NZ1CREH]"
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '[G-ZL8NZ1CREH]');
        `,
                    }}
                />
            </Head>

            <main className={styles.main}>

                <article className="prose lg:prose-xl mx-3">
                    <h1>Getting Started with Japanese</h1>

                    <p>
                        This is a simplified starting guide for learning Japanese.  We will focus on the shortest number of steps to get you started on your Japanese language learning.  Some steps will be listed as optional or have some links to additional reading that you can review when you have time. Don't be worried if all the tools and techniques aren't tweaked 100% perfectly, what's most important is just starting and being consistent.<br /><br />

                        A lot of our guide and recommendations are inspired by the ideas taught from <a href="https://refold.la/about">Refold.la</a>.  I would highly recommend reading stages 0 and 1 at some point.  I would not worry about the details too much if you're just starting (the most important thing is just starting and staying consistent with your practice!).  When you've gone through most of this guide, you'd be ready to read stage 2!
                    </p>

                    <h2>0. Anki</h2>
                    <p>
                        Anki is a powerful flashcard system that will be super useful in your language learning journey.   While its core functionality is simple, it is HIGHLY customizable, and can be complex at times.  For getting started we will try and keep the setup simple.<br /><br />

                        You can download the desktop version here: <a href="https://apps.ankiweb.net/">Anki Desktop</a>.<br /><br />

                        While having a mobile app is optional, I find it very useful.<br /><br />

                        There is an unofficial version for android that is free and very popular:  <a href="https://play.google.com/store/apps/details?id=com.ichi2.anki&hl=en_US&gl=US">AnkiDroid for Android</a>.<br /><br />

                        There is an Official iOS version, however it does costs $25.  If you're going to be spending the majority of your time studying using your mobile device, I <b>highly</b> recommend this version specifically: <a href="https://apps.apple.com/us/app/ankimobile-flashcards/id373493387">AnkiMobile for iOS</a>.<br /><br />

                        Anki is a <a href="https://en.wikipedia.org/wiki/Spaced_repetition">SRS</a> (Spaced Repetition Software).  This means that as you are shown new cards, the more that you remember them Anki will show you those cards less frequently.  For cards that you do not remember, Anki will try and show you those again sooner to help you remember them.  The green number next to the Anki deck is the cards Anki has calculated that you need to review for that day in order to help reinforce the memory, while the blue number is the number of new cards Anki wants you to review that day.
                    </p>

                    <h3>Anki Customization (optional, though recommended)</h3>
                    <p>
                        There are some great recommendations made here: <a href="https://refold.la/roadmap/stage-1/a/anki-setup#Recommended-Options-Settings">https://refold.la/roadmap/stage-1/a/anki-setup#Recommended-Options-Settings</a> on some recommended options for setting up anki.  There is a bit of useful reading there, but I would just focus on the 4 screenshots under the Recommended Options Settings section, and not worrying too much about the rest for now.
                    </p>

                    <h3>"Low-key" Anki</h3>
                    <p>
                        Throughout this guide (and beyond), we recommend only using the "again" button (when you don't know a card, or you can't fully remember it) and "good" button (When you remember the card meaning and the pronounciation if it applies) when grading your flashcards.  More reading on why can be found here: <a href="https://refold.la/roadmap/stage-1/a/anki-setup#Recommended-Options-Settings">Low-key Anki</a>
                    </p>

                    <h2>1. Hiragana and Katakana</h2>

                    <h3>Hiragana</h3>
                    <p>
                        This is the basic alphabet for Japanese.  It is best to start out by memorizing each of the characters and their sounds at least moderately well.  This will make the rest of the learning journey much easier!<br /><br />

                        There is a lot of different Hiragana learning tools out there, as well as <a href="https://www.amazon.com/Hiragana-Katakana-Flashcards-Japanese-Mnemonics/dp/B07D2M1VHG/ref=sr_1_3?crid=LCNPFZET2OR7&dchild=1&keywords=hiragana+flash+cards&qid=1615520604&sprefix=hiragana%2Caps%2C190&sr=8-3">physical flashcards</a>! For a Hiragana Anki deck you can download: <a href="https://ankiweb.net/shared/info/195754716">https://ankiweb.net/shared/info/195754716</a>. You can double click on this file (or open on mobile) and it will import right into Anki!
                    </p>

                    <h3>Katakana</h3>
                    <p>
                        Katakana is just like Hiragana, except its used for "foreign" words, and the characters look somewhat similar, though quite different at times.  The sounds in Katakana are the same as they are in Hiragana, but their use is different.  I have found a lot of people will skip on Katakana and pick it up as they go.  You can choose to skip it for now, but you will likely need to revist it at somepoint to learn it (I personally did not learn katakana at first and did find myself stuck at a certain point and went back and just powered through it in a couple days).

                        An Anki deck for Katakana can be setup just the same as our Hiragana deck: <a href="https://ankiweb.net/shared/info/183933952">https://ankiweb.net/shared/info/183933952</a>
                    </p>

                    <h2>2. JLPT N5 Level Stuff</h2>
                    <p>Once you have at least Hiragana down, you can start your journey into N5 level vocab.  There will be some Katakana that does come up, but refer to our notes above on Katakana if you have not learned it yet.</p>

                    <h3>N5 Level Vocab</h3>
                    <p>
                        Essentially start doing this deck daily: <a href="https://ankiweb.net/shared/info/1679429599">https://ankiweb.net/shared/info/1679429599</a><br />
                        If you do 10 new cards daily, you will be done with new cards in just over 3 months (Though I would recommend continuing to review the cards daily, as anki recommends, for at least 3 months after).
                    </p>
                    <h3>RRTK - Remembering the Kanji</h3>
                    <p>
                        Remembering the Kanji is a technique that helps to turn Kanji from hieroglyphics and make them comprehensible.  There is a lot of write-ups on the subject, but I would recommend just doing the basic 450 card deck, which should serve the purpose of making Kanji comprehensible.  If you do 5 a day alongside the N5 deck above, you will be done in about 3 months! <br />

                        <a href="https://mega.nz/file/6skmAQQY#iFR7kkJSUy64QsFY1G8ixRIk9z_yvbG6yEfWvTu8Jl4">Download the RRTK Deck Here</a>
                    </p>

                    <h1>What's Next?</h1>
                    <p>
                        After you get through all of that, first off, congrats! You probably now know more Kanji than you ever thought possible and can even read some <a href="https://www.amazon.com/gp/product/B08FDXBPT3/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1">Japanese short stories</a>. From this point there are a lot of routes you can take to continue your language learning journey (and this is where it starts to get fun!).  Below are some of my recommendations (In no particular order).<br />
                        <ul>
                            <li>You can go on and do the <a href="https://ankiweb.net/shared/info/1585001017">JLPT N4 Deck</a></li>
                            <li>Study Grammer with <a href="http://www.guidetojapanese.org/learn/grammar">Tai Kim's Guide</a></li>
                            <li>Jump into immersing with native content (if you have not started already).  For more information on immersing, checkout <a href="https://refold.la/roadmap/stage-1/a/active-immersion">Refold.la</a>. A lot of our guide is based off the topics they discussed there!.</li>
                        </ul>
                    </p>

                    <h1>Useful Tools</h1>
                    <p>
                        There are a lot of tools out there that can help with your language learning journey.  Anki is a pretty core tool in the steps we have done so far, but there are plenty of others that I have found helpful that I will list below.
                    </p>

                    <h2>Jisho</h2>
                    <p>
                        <a href="https://jisho.org/">Jisho</a> is, simply put, a great online Japanese dictionary.
                    </p>

                    <h2>Refold Japanese - Community Docs</h2>
                    <p>
                        The <a href="https://refold.la/">Refold</a> Japanese community has posted some docs that are helpful resources on how to more practically go through the language learning process.

                        <ul>
                            <li><a href="https://docs.google.com/document/d/1CRIlBwd1qdHS501AfVFL5sQRdwSGna3ktWwkspRaJW0/edit#">Refold Japanese Content Guide</a> - Has a ton of recommended Japanese content from the Refold Japanese community that is tailored to each stage of the Refold process.</li>
                            <li><a href="https://docs.google.com/document/u/1/d/e/2PACX-1vRTJ22UiHpPaafBlY2vNxQr1ROjq1iFp8_3rlVPYFqf3Se316Vf4Ucw2fljzDA8PPVqyMuWqf-t70s5/pub">Refold Unofficial Japanese Guide</a> - A guide put together from the community that covers, more indepth, some of the topics I have written about above.</li>
                        </ul>
                    </p>

                    <h2>Sheodox Tool's</h2>
                    <p>
                        Sheodox has written some great tools surrounding Japanese language learning and I wanted to link two I've found especially useful below!
                        <ul>
                            <li><a href="https://github.com/sheodox/jimaku-player">Jimaku Player</a> - bring your own japanese subtitles to CrunchyRoll and VRV</li>
                            <li><a href="https://github.com/sheodox/context.reviews">Context.reviews</a> - is a browser extension that will save your <a href="https://jisho.org/">https://jisho.org/</a> searches so you can easily make Anki cards with them later on <a href="https://context.reviews/">context.reviews</a> (I found this perfect for phrases/words I don't know that I come across while reading).</li>
                        </ul>
                    </p>

                    <h2>Migaku's Tools</h2>
                    <p>
                        <a href="https://www.migaku.io/">Migaku's language learning toolkit</a> creates several tools that can aid your language learning Journey, but I just wanted to highlight a few below:

                        <ul>
                            <li><a href="https://www.migaku.io/tools-guides/migaku-japanese/quickstart">Migaku Japanese (Anki Card Type)</a> - Helps with making Anki cards. Providing pitch accent and word parsing (You can make cards that highlight the words just the like the N5 deck, automatically!).</li>
                            <li><a href="https://www.migaku.io/tools-guides/migaku-browser-extension/quickstart">Migaku Browser Extension</a> - At the time of writing, this is still in pretty active development, but you can automatically make Anki cards using subtitles from Netflix and YouTube with the push of a button (It captures the sentence, audio, and screenshot automatically)!</li>
                        </ul>
                    </p>

                </article>


            </main>

            <footer className={styles.footer}>

            </footer>
        </div >
    )
}

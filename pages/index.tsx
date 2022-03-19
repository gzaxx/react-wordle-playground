import type { NextPage } from "next";
import Head from "next/head";
import { WordRow } from "../components/WordRow";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Wordle</title>
        <meta name="description" content="React Wordle App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <WordRow row={1} letterCount={6}></WordRow>
      </main>

      <footer className={styles.footer}>Test Wordle</footer>
    </div>
  );
};

export default Home;

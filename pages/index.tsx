import type { NextPage } from "next";
import Head from "next/head";
import { WordRow } from "../components/WordRow";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Wordle</title>
        <meta name="description" content="React Wordle App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WordRow row={1} letterCount={5}></WordRow>
      </main>

      <footer>Test Wordle</footer>
    </div>
  );
};

export default Home;

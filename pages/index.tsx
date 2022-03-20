import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { WordRow } from "../components/WordRow";
import useGlobalKeyUpEvent from "../effects/key-events";

const Chars = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

const Container = styled.div`
  padding: 0 2rem;
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

const GameArea = styled.main`
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > *:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const Header = styled.section`
  min-height: 30px;
  padding: 1rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface IRowState {
  0: Array<string>;
  1: Array<string>;
  2: Array<string>;
  3: Array<string>;
  4: Array<string>;
  5: Array<string>;
}

interface IGameState {
  isActive: boolean;
  currentRow: number;
  letterCount: number;
  values: IRowState;
}

const defaultState: IGameState = {
  isActive: true,
  currentRow: 1,
  letterCount: 5,
  values: {
    0: new Array<string>(),
    1: new Array<string>(),
    2: new Array<string>(),
    3: new Array<string>(),
    4: new Array<string>(),
    5: new Array<string>(),
  },
};

const Home: NextPage = () => {
  const [gameState, setGameState] = useState(defaultState);

  const keyEvent = (ev: KeyboardEvent) => {
    if (Chars.indexOf(ev.key) >= 0) {
      const values = gameState.values;
      const current = values[0];

      current.push(ev.key);

      setGameState({ ...gameState, values });
    }
  };
  useGlobalKeyUpEvent(keyEvent);

  return (
    <Container>
      <Head>
        <title>React Wordle</title>
        <meta name="description" content="React Wordle App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>Wordle</Header>

      <GameArea>
        {Object.entries(gameState.values).map(([, value], index) => (
          <WordRow key={index} row={index} values={value}></WordRow>
        ))}
      </GameArea>

      <Footer>Test Wordle</Footer>
    </Container>
  );
};

export default Home;

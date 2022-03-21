import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { WordRow } from "../components/WordRow";
import useGlobalKeyUpEvent from "../effects/key-events";
import { IGameState } from "../interfaces";
import {
  getDefaultState,
  progressGame,
  tryAddLetter,
  tryRemoveLetter,
  validate,
} from "../logic";
import { canSubmit } from "../logic/can-submit";

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

const defaultState: IGameState = getDefaultState();

const Home: NextPage = () => {
  const [gameState, setGameState] = useState(defaultState);

  const keyEvent = (ev: KeyboardEvent) => {
    if (!gameState.isActive) {
      return;
    }

    if (Chars.indexOf(ev.key) >= 0) {
      if (tryAddLetter(gameState, ev.key)) {
        setGameState({ ...gameState });
      }
    } else if (ev.key === "Enter") {
      if (canSubmit(gameState)) {
        validate(gameState);
        progressGame(gameState);
        setGameState({ ...gameState });
      }
    } else if (ev.key === "Backspace") {
      if (tryRemoveLetter(gameState)) {
        setGameState({ ...gameState });
      }
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
        {Object.entries(gameState.rows).map(([, value], index) => (
          <WordRow key={index} row={index} values={value.values}></WordRow>
        ))}
      </GameArea>

      <Footer>Test Wordle</Footer>
    </Container>
  );
};

export default Home;

import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { WordRow } from "../components/WordRow";
import useGlobalKeyUpEvent from "../effects/key-events";
import { IGameState } from "../interfaces";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  getDefaultState,
  progressGame,
  tryAddLetter,
  tryRemoveLetter,
} from "../logic";
import { canSubmit } from "../logic/can-submit";
import { NextRouter } from "next/router";
import { GameResult } from "../components/GameResult";

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

export async function getStaticProps({ locale }: NextRouter) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "", ["common", "footer"])),
    },
  };
}

const Home: NextPage = () => {
  const [t] = useTranslation();
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
        const newState = progressGame(gameState);
        setGameState(newState);
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

      <Header>{t("title")}</Header>

      <GameArea>
        {Object.entries(gameState.rows).map(([, value], index) => (
          <WordRow key={index} row={index} values={value.values}></WordRow>
        ))}
      </GameArea>

      <GameResult result={gameState.gameResult}></GameResult>

      <Footer>{t("footer.text")}</Footer>
    </Container>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { WordRow } from "../components/WordRow";

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

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>React Wordle</title>
        <meta name="description" content="React Wordle App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>Wordle</Header>

      <GameArea>
        {[...Array(6)].map((_, index) => (
          <WordRow key={index} row={index} letterCount={5}></WordRow>
        ))}
      </GameArea>

      <Footer>Test Wordle</Footer>
    </Container>
  );
};

export default Home;

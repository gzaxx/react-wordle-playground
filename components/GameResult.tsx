import { useTranslation } from "next-i18next";
import React from "react";
import styled, { css } from "styled-components";
import { GameResultType } from "../interfaces";

export interface GameResultProps {
  result: GameResultType;
}

const Container = styled.div<GameResultProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 350px;
  ${(props: GameResultProps) => {
    switch (props.result) {
      case GameResultType.Won:
        return css`
          background-color: rgb(106, 170, 100);
        `;
      case GameResultType.Lost: {
        return css`
          background-color: rgb(201, 180, 88);
        `;
      }
    }
  }}
`;

export const GameResult = ({ result, ...props }: GameResultProps) => {
  const [t] = useTranslation();
  if (result === GameResultType.InProgress) {
    return null;
  }

  const won = result === GameResultType.Won;

  return (
    <Container result={result} {...props}>
      {won ? t("result.won") : t("result.lost")}
    </Container>
  );
};

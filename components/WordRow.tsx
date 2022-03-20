import React from "react";
import styled from "styled-components";
import { Letter } from "./Letter";

export interface WordRowProps {
  row: number;
  letterCount: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 350px;
`;

export const WordRow = ({ row, letterCount, ...props }: WordRowProps) => {
  let letters = [];
  for (let i = 0; i < letterCount; i++) {
    const key = row * i;
    let value = "";
    if (i == 0) {
      value = "A";
    }
    letters.push(<Letter key={key} value={value} {...props}></Letter>);
  }

  return <Wrapper {...props}>{letters}</Wrapper>;
};

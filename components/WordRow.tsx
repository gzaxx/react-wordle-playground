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
  return (
    <Wrapper {...props}>
      {[...Array(letterCount)].map((_, index) => {
        const key = `${row}${index}`;
        return <Letter key={key} {...props}></Letter>;
      })}
    </Wrapper>
  );
};

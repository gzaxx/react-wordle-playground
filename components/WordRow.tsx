import React from "react";
import styled from "styled-components";
import { Letter } from "./Letter";

export interface WordRowProps {
  row: number;
  values: Array<string>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 350px;
`;

export const WordRow = ({ row, values, ...props }: WordRowProps) => {
  return (
    <Wrapper {...props}>
      {[...Array(5)].map((_, index) => {
        const key = `${row}${index}`;
        return <Letter key={key} value={values[index]} {...props}></Letter>;
      })}
    </Wrapper>
  );
};

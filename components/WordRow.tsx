import React from "react";
import styled from "styled-components";
import { IRowData } from "../interfaces";
import { Letter } from "./Letter";

export interface WordRowProps {
  row: number;
  values: Array<IRowData>;
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
      {values.map((rowData, index) => {
        const key = `${row}${index}`;
        return <Letter key={key} {...rowData} {...props}></Letter>;
      })}
    </Wrapper>
  );
};

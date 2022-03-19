import React from "react";
import { Letter } from "./Letter";

export interface WordRowProps {
  row: number;
  letterCount: number;
}

export const WordRow = ({ row, letterCount, ...props }: WordRowProps) => {
  let letters = [];
  for (let i = 0; i < letterCount; i++) {
    const key = row * i;
    letters.push(
      <Letter
        {...key}
        value=""
        readonly={true}
        tabIndex={key}
        {...props}
      ></Letter>
    );
  }

  return <>{letters}</>;
};

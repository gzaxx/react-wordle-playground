import { IGameState } from "../interfaces/gameState";
import { IRow } from "../interfaces/row";

export const MAX_TRIES = 6;
export const MAX_LETTERS_PER_ROW = 5;

export function getDefaultState(): IGameState {
  const values = new Array<IRow>();

  for (let i = 0; i < MAX_TRIES; i++) {
    values.push({ values: new Array<string>(MAX_LETTERS_PER_ROW) });
  }

  return {
    targetWord: "testy",
    currentRowIndex: 0,
    maxTries: MAX_TRIES,
    letterCount: MAX_LETTERS_PER_ROW,
    isActive: true,
    rows: values,
  };
}

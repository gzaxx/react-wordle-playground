import { IGameState, IRow, IRowData, ValueStatus } from "../interfaces";

export const MAX_TRIES = 6;
export const MAX_LETTERS_PER_ROW = 5;

export function getDefaultState(): IGameState {
  const rows = new Array<IRow>();

  for (let i = 0; i < MAX_TRIES; i++) {
    const row: IRow = { values: new Array<IRowData>() };

    for (let j = 0; j < MAX_LETTERS_PER_ROW; j++) {
      row.values.push({ status: ValueStatus.notSet, value: "" });
    }

    rows.push(row);
  }

  return {
    targetWord: "testy",
    currentRowIndex: 0,
    maxTries: MAX_TRIES,
    letterCount: MAX_LETTERS_PER_ROW,
    isActive: true,
    rows: rows,
  };
}

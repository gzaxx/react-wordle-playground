import { IGameState } from "../interfaces/gameState";
import { IRow } from "../interfaces/row";

export function tryAddLetter(gameState: IGameState, letter: string): boolean {
  const row: IRow = gameState.rows[gameState.currentRowIndex];

  for (let i = 0; i < gameState.letterCount; i++) {
    if (row.values[i]) {
      continue;
    }

    row.values[i] = letter;
    return true;
  }

  return false;
}

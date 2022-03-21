import { IGameState } from "../interfaces/game-state";
import { IRow } from "../interfaces/row";

export function tryAddLetter(gameState: IGameState, letter: string): boolean {
  const row: IRow = gameState.rows[gameState.currentRowIndex];

  for (let i = 0; i < gameState.letterCount; i++) {
    if (row.values[i].value) {
      continue;
    }

    row.values[i].value = letter;
    return true;
  }

  return false;
}

import { IGameState, IRow } from "../interfaces";

export function tryRemoveLetter(gameState: IGameState): boolean {
  const row: IRow = gameState.rows[gameState.currentRowIndex];

  for (let i = gameState.letterCount - 1; i >= 0; i--) {
    if (row.values[i]) {
      row.values[i] = "";
      return true;
    }
  }

  return false;
}

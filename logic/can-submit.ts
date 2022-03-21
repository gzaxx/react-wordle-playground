import { IGameState } from "../interfaces";

export function canSubmit(gameState: IGameState): boolean {
  const hasFalsyValue = gameState.rows[gameState.currentRowIndex].values.some(
    (x) => !x
  );

  return !hasFalsyValue;
}

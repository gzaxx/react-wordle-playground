import { IGameState } from "../interfaces";

export function canSubmit(gameState: IGameState): boolean {
  const hasFalsyValue = gameState.rows[gameState.currentRowIndex].values.some(
    (x) => !isValid(x.value)
  );

  return !hasFalsyValue;
}

function isValid(value: string): boolean {
  return value !== null && value.length === 1;
}

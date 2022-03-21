import { IGameState, ValueStatus } from "../interfaces";
import { MAX_TRIES } from "./get-default-state";

export function progressGame(gameState: IGameState): void {
  const currentProgress = gameState.currentRowIndex + 1;
  const allValid = !gameState.rows[gameState.currentRowIndex].values.some(
    (x) => x.status != ValueStatus.currect
  );

  if (allValid) {
    alert("Wygrana");
    gameState.isActive = false;
  }

  if (currentProgress >= MAX_TRIES) {
    gameState.isActive = false;
  }

  gameState.currentRowIndex = currentProgress;
}

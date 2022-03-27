import { GameResultType, IGameState, IRow, ValueStatus } from "../interfaces";
import { MAX_TRIES, MAX_LETTERS_PER_ROW } from "./get-default-state";

export function progressGame(gameState: IGameState): IGameState {
  validate(gameState);

  const currentProgress = gameState.currentRowIndex + 1;
  const allValid = !gameState.rows[gameState.currentRowIndex].values.some(
    (x) => x.status != ValueStatus.currect
  );

  if (allValid) {
    gameState.gameResult = GameResultType.Won;
    gameState.isActive = false;
  }

  if (currentProgress >= MAX_TRIES) {
    gameState.isActive = false;
    gameState.gameResult = GameResultType.Lost;
  }

  return {
    ...gameState,
    currentRowIndex: currentProgress,
  };
}

function validate(gameState: IGameState): void {
  const row: IRow = gameState.rows[gameState.currentRowIndex];

  for (let i = 0; i < MAX_LETTERS_PER_ROW; i++) {
    const val = row.values[i];
    const letter = gameState.targetWord.charAt(i);

    if (val.value === letter) {
      val.status = ValueStatus.currect;
    } else if (gameState.targetWord.indexOf(val.value) >= 0) {
      val.status = ValueStatus.wrongPosition;
    } else {
      val.status = ValueStatus.incorrect;
    }
  }
}

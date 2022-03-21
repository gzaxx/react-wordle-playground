import { IGameState, IRow, ValueStatus } from "../interfaces";
import { MAX_LETTERS_PER_ROW } from "./get-default-state";

export function validate(gameState: IGameState): void {
  const row: IRow = gameState.rows[gameState.currentRowIndex];

  for (let i = 0; i < MAX_LETTERS_PER_ROW; i++) {
    const val = row.values[i];
    const letter = gameState.targetWord.charAt(i);

    if (val.value == letter) {
      val.status = ValueStatus.currect;
    } else if (gameState.targetWord.indexOf(val.value) >= 0) {
      val.status = ValueStatus.wrongPlace;
    } else {
      val.status = ValueStatus.incorrect;
    }
  }
}

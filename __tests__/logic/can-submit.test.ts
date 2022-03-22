import { ValueStatus } from "./../../interfaces/row-data";
import { IRow } from "./../../interfaces/row";
import { IGameState, GameResultType } from "./../../interfaces/game-state";
import { canSubmit } from "../../logic/can-submit";

const rowMock: IRow = {
  values: [
    { value: "", status: ValueStatus.notSet },
    { value: "", status: ValueStatus.notSet },
  ],
};

const gameStateMock: IGameState = {
  currentRowIndex: 0,
  gameResult: GameResultType.InProgress,
  isActive: true,
  letterCount: 2,
  maxTries: 1,
  rows: [rowMock],
  targetWord: "test",
};

describe("can-submit", () => {
  it("not all words filled in row then returns false", () => {
    const result = canSubmit(gameStateMock);
    expect(result).toBe(false);
  });
  it("all words filled in row then returns true", () => {
    const filledRow: IRow = {
      values: [
        { value: "a", status: ValueStatus.currect },
        { value: "b", status: ValueStatus.currect },
      ],
    };
    const gameState: IGameState = {
      ...gameStateMock,
      rows: [filledRow],
    };

    const result = canSubmit(gameState);
    expect(result).toBe(true);
  });
});

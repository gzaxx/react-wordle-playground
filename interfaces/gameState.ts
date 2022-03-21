import { IRow } from "./row";

export interface IGameState {
  targetWord: string;
  currentRowIndex: number;
  maxTries: number;
  isActive: boolean;
  letterCount: number;
  rows: Array<IRow>;
}

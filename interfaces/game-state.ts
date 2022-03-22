import { IRow } from "./row";

export enum GameResultType {
  InProgress,
  Lost,
  Won,
}

export interface IGameState {
  targetWord: string;
  currentRowIndex: number;
  maxTries: number;
  isActive: boolean;
  letterCount: number;
  gameResult: GameResultType;
  rows: Array<IRow>;
}

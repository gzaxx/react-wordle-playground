export enum ValueStatus {
  notChecked,
  currect,
  incorrect,
  wrongPosition,
}

export interface IRowData {
  value: string;
  status: ValueStatus;
}

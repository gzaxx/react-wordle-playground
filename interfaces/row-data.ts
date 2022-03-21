export enum ValueStatus {
  notSet,
  currect,
  incorrect,
  wrongPlace,
}

export interface IRowData {
  value: string;
  status: ValueStatus;
}

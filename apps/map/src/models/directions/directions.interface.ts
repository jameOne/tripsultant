export interface MatrixElementInterface {
  row: number;
  column: number;
}

export interface DirectionsInterface {
  matrixElements: MatrixElementInterface[];
}

export enum DirectionsModeEnum {
  DRIVING,
  TRANSIT,
  WALKING,
  FLYING,
}

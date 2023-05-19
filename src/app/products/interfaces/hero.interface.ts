export enum Color {
  red = 'red', back = 'back', blue = 'blue', green = 'green',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}

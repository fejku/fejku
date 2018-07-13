import { FiveColor } from './enums';
import { IPosition } from './position';

export interface IGhost {
  name: string;
  color: FiveColor;
  resistance: number;
  position: IPosition;

  disablingTaoistPower: boolean;
  taoDiceHaveEffect: boolean;
  wuFeng: boolean;
}

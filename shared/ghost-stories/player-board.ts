import { FourColor } from './enums';
import { IGhost } from './ghost';

export interface IPlayerBoard {
  color: FourColor;
  fields: [IGhost, IGhost, IGhost];
  buddhaFields: [boolean, boolean, boolean];

  powerName: string;
  powerActive: boolean;
  wasDead: boolean;
}

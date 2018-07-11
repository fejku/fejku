import { FourColor } from './enums';
import { IToken } from './token';
import { IBuddhaFigure } from './buddha-figure';

export interface IPlayer {
  color: FourColor;
  qiTokens: number;
  jinJangToken: number;
  taoTokens: IToken[];
  position: number;
  buddhaFigures: IBuddhaFigure[];
}

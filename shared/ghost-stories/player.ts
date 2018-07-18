import { FourColor } from './enums';
import { IBuddhaFigure } from './buddha-figure';
import { IJinJangToken } from './jin-jang-token';
import { ITaoToken } from './tao-token';

export interface IPlayer {
  color: FourColor;
  qiTokens: number;
  jinJangToken: IJinJangToken;
  taoTokens: ITaoToken[];
  position: number;
  buddhaFigures: IBuddhaFigure[];
}

import { IToken } from './token';

export interface IBank {
  qiTokens: number;
  jinJangTokens: IToken[];
  taoTokens: IToken[];
}

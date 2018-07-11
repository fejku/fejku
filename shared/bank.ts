import { Token } from './token';

export interface Bank {
  qiTokens: number;
  jinJangTokens: Token[];
  taoTokens: Token[];
}

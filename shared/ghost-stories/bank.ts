import { IJinJangToken } from './jin-jang-token';
import { ITaoToken } from './tao-token';

export interface IBank {
  qiTokens: number;
  jinJangTokens: IJinJangToken[];
  taoTokens: ITaoToken[];
}

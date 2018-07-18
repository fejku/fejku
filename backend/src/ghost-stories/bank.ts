import { IBank } from '../../../shared/ghost-stories/bank';
import { IJinJangToken } from '../../../shared/ghost-stories/jin-jang-token';
import { ITaoToken } from '../../../shared/ghost-stories/tao-token';
import { FiveColor } from '../../../shared/ghost-stories/enums';

export class Bank implements IBank {
  private _qiTokens: number;
  private _jinJangTokens: IJinJangToken[];
  private _taoTokens: ITaoToken[];

  private readonly QI_TOKENS_AMOUNT = 20;
  private readonly TAO_TOKENS_AMOUNT = 4;

  constructor() {
    this._qiTokens = 4;
    this._jinJangTokens = [];
    this._taoTokens = this.initTaoTokens();
  }

  get qiTokens(): number {
    return this._qiTokens;
  }

  set qiTokens(qiTokens: number) {
    this._qiTokens = qiTokens;
  }

  get jinJangTokens(): IJinJangToken[] {
    return this._jinJangTokens;
  }

  set jinJangTokens(jinJangTokens: IJinJangToken[]) {
    this.jinJangTokens = jinJangTokens;
  }

  get taoTokens(): ITaoToken[] {
    return this._taoTokens;
  }

  set taoTokens(taoTokens: ITaoToken[]) {
    this.taoTokens = taoTokens;
  }

  private initTaoTokens() {
    const resultTokens: ITaoToken[] = [];
    for (const color in FiveColor) {
      if (color === FiveColor.BLACK) {
        const tokens = this.getTokens(color as FiveColor, 4);
        resultTokens.push(...tokens);
      } else {
        const tokens = this.getTokens(color as FiveColor, 3);
        resultTokens.push(...tokens);
      }
    }
    return resultTokens;
  }

  private getTokens(color: FiveColor, amount: number): ITaoToken[] {
    const tokens: ITaoToken[] = [];
    for (let i = 0; i < amount; i++) {
      tokens.push({color: color});
    }
    return tokens;
  }
}

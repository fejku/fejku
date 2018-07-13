import { IBank } from 'shared/ghost-stories/bank';
import { IToken } from 'shared/ghost-stories/token';

export class Bank implements IBank {
  private _qiTokens: number;
  private _jinJangTokens: IToken[];
  private _taoTokens: IToken[];

  constructor() { }

  get qiTokens(): number {
    return this._qiTokens;
  }

  set qiTokens(qiTokens: number) {
    this._qiTokens = qiTokens;
  }

  get jinJangTokens(): IToken[] {
    return this._jinJangTokens;
  }

  set jinJangTokens(jinJangTokens: IToken[]) {
    this.jinJangTokens = jinJangTokens;
  }

  get taoTokens(): IToken[] {
    return this._taoTokens;
  }

  set taoTokens(taoTokens: IToken[]) {
    this.taoTokens = taoTokens;
  }
}

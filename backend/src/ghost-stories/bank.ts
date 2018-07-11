import { Bank as IBank } from 'shared/bank';
import { Token } from 'shared/token';

export class Bank implements IBank {
  private _qiTokens: number;
  private _jinJangTokens: Token[];
  private _taoTokens: Token[];

  constructor() { }

  get qiTokens(): number {
    return this._qiTokens;
  }

  set qiTokens(qiTokens: number) {
    this._qiTokens = qiTokens;
  }

  get jinJangTokens(): Token[] {
    return this._jinJangTokens;
  }

  get taoTokens(): Token[] {
    return this._taoTokens;
  }
}

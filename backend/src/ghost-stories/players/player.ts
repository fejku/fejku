import { IToken } from '../../../../shared/token';
import { IBuddhaFigure } from '../../../../shared/buddha-figure';
import { FourColor, FiveColor } from '../../../../shared/enums';
import { IPlayer } from '../../../../shared/player';

export class Player implements IPlayer {
  private _qiTokens: number;
  private _jinJangToken: number;
  private _taoTokens: IToken[];
  private _position: number;
  private _buddhaFigures: IBuddhaFigure[];

  constructor(private _color: FourColor) {
    this._qiTokens = 4;
    this._jinJangToken = 1;
    this._taoTokens = this.initTaoTokens();
    this._position = 4;
  }

  get color(): FourColor {
    return this._color;
  }

  get colorKey(): string {
    return FourColor[this._color];
  }

  set color(color: FourColor) {
    this._color = color;
  }

  get qiTokens(): number {
    return this._qiTokens;
  }

  set qiTokens(qiTokens: number) {
    this._qiTokens = qiTokens;
  }

  get jinJangToken(): number {
    return this._jinJangToken;
  }

  set jinJangToken(jinJangToken: number) {
    this._jinJangToken = jinJangToken;
  }

  get taoTokens(): IToken[] {
    return this._taoTokens;
  }

  set taoTokens(taoTokens: IToken[]) {
    this._taoTokens = taoTokens;
  }

  get position(): number {
    return this._position;
  }

  set position(position: number) {
    this._position = position;
  }

  get buddhaFigures(): IBuddhaFigure[] {
    return this._buddhaFigures;
  }

  set buddhaFigures(buddhaFigures: IBuddhaFigure[]) {
    this._buddhaFigures = buddhaFigures;
  }

  private initTaoTokens(): IToken[] {
    return [
      { color: FiveColor[this.colorKey] }
    ];
  }
}

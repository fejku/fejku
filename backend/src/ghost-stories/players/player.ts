import { IBuddhaFigure } from '../../../../shared/ghost-stories/buddha-figure';
import { FourColor, FiveColor } from '../../../../shared/ghost-stories/enums';
import { IPlayer } from '../../../../shared/ghost-stories/player';
import { IJinJangToken } from '../../../../shared/ghost-stories/jin-jang-token';
import { ITaoToken } from '../../../../shared/ghost-stories/tao-token';


export class Player implements IPlayer {
  private _qiTokens: number;
  private _jinJangToken: IJinJangToken;
  private _taoTokens: ITaoToken[];
  private _position: number;
  private _buddhaFigures: IBuddhaFigure[];

  constructor(private _color: FourColor) {
    this._qiTokens = 4;
    this._jinJangToken = { color: _color };
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

  get jinJangToken(): IJinJangToken {
    return this._jinJangToken;
  }

  set jinJangToken(jinJangToken: IJinJangToken) {
    this._jinJangToken = jinJangToken;
  }

  get taoTokens(): ITaoToken[] {
    return this._taoTokens;
  }

  set taoTokens(taoTokens: ITaoToken[]) {
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

  private initTaoTokens(): ITaoToken[] {
    return [
      { color: FiveColor[this.colorKey] }
    ];
  }
}

import { Token } from 'shared/token';
import { BuddhaFigure } from 'shared/buddha-figure';
import { FourColor, FiveColor } from 'shared/enums';

export class Player {
  private qiTokens: number;
  private jinJangToken: number;
  private taoTokens: Token[];
  private position: number;
  private buddhaFigures: BuddhaFigure[];

  constructor(private color: FourColor) {
    this.qiTokens = 4;
    this.jinJangToken = 1;
    this.taoTokens = this.initTaoTokens();
    this.position = 4;
  }

  private initTaoTokens(): Token[] {
    return [
      {color: FiveColor[this.getColorKey()]}
    ];
  }

  public getColorValue(): number {
    return this.color;
  }

  public getColorKey(): string {
    return FourColor[this.color];
  }
}

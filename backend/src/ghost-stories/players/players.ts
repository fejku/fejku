import { IPlayers } from 'shared/ghost-stories/players';
import { Player } from './player';

export class Players implements IPlayers {
  private _actualPlayer: number;
  private _players: Player[];

  constructor () { }

  get actualPlayer(): number {
    return this._actualPlayer;
  }

  set actualPlayer(actualPlayer: number) {
    this._actualPlayer = actualPlayer;
  }

  get players(): Player[] {
    return this._players;
  }

  set players(players: Player[]) {
    this._players = players;
  }
}

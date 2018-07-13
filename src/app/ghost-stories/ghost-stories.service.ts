import { Injectable } from '@angular/core';
import { IBoard } from 'shared/ghost-stories/board';
import { IBank } from 'shared/ghost-stories/bank';
import { IPlayers } from 'shared/ghost-stories/players';
import { IPlayerBoard } from 'shared/ghost-stories/player-board';

@Injectable({
  providedIn: 'root'
})
export class GhostStoriesService {
  private ghostStories: {board: IBoard, players: IPlayers, bank: IBank};
  public board: IBoard[] = [];

  constructor() {
    // TODO: tests
    this.addItemToBoard();
   }

  addItemToBoard() {
    // this.board.push({color: 'yellow'});
    // this.board.push({color: 'green'});
    // this.board.push({color: 'blue'});
    // this.board.push({color: 'red'});
    // const test: IPlayerBoard = { fields: [null, null, null]};
    // console.log(test);
  }
}

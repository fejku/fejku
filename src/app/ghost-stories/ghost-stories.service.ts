import { Injectable } from '@angular/core';
import { IBoard } from 'shared/board';
import { IBank } from 'shared/bank';

@Injectable({
  providedIn: 'root'
})
export class GhostStoriesService {
  private ghostStories: {board: IBoard, players: Players, bank: IBank};
  public board: IBoard[] = [];

  constructor() {
    this.addItemToBoard();
   }

  addItemToBoard() {
    this.board.push({color: 'yellow'});
    this.board.push({color: 'green'});
    this.board.push({color: 'blue'});
    this.board.push({color: 'red'});
  }
}

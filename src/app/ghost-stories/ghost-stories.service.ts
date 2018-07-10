import { Injectable } from '@angular/core';
import { Board } from 'shared/board';

@Injectable({
  providedIn: 'root'
})
export class GhostStoriesService {
  public board: Board[] = [];

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

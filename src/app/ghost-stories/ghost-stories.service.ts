import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import * as io from 'socket.io-client';

import { IBoard } from 'shared/ghost-stories/board';
import { IBank } from 'shared/ghost-stories/bank';
import { IPlayers } from 'shared/ghost-stories/players';


@Injectable({
  providedIn: 'root'
})
export class GhostStoriesService {
  private socket;

  private ghostStories: {board: IBoard, players: IPlayers, bank: IBank};
  public board: IBoard[] = [];

  constructor() {
    this.socket = io(environment.ws_url);
    // startSocketIO() {
    //   this.socket.emit('ghost start'); // , JSON.stringify(data));
    // }
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

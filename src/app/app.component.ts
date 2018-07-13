import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private socket;

  constructor() {
    this.socket = io(environment.ws_url);
  }

  startSocketIO() {
    this.socket.emit('ghost start'); // , JSON.stringify(data));
  }
}

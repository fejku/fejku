import { createServer, Server as HttpServer } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';

export class Server {
  public static readonly PORT: number = 3000;
  private app: express.Application;
  private server: HttpServer;
  private io: SocketIO.Server;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || Server.PORT;
    this.server = createServer(this.app);
    this.io = socketIo(this.server);

    this.listen();
  }

  private listen(): void {
    this.io.on('connection', (socket: socketIo.Socket) => {
      console.log('Connected client on port %s.', this.port);
      // socket.on('message', (m: Message) => {
      //     console.log('[server](message): %s', JSON.stringify(m));
      //     this.io.emit('message', m);
      // });

      socket.on('ghost start', function () {
        console.log('I received a message');
      });

      socket.on('disconnect', () => {
          console.log('Client disconnected');
      });
    });

    this.server.listen(this.port, () => {
        console.log('Running server on port %s', this.port);
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}

import { createServer, Server as HttpServer } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { CrawlerController } from './crawler/crawler';

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

    this.configure();

    this.listen();
  }

  private configure(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));

    // Cors
    this.app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
      next();
    });
  }

  private listen(): void {
    this.setMongoose();
    this.setSocketIo();
    this.setRoutes();

    this.server.listen(this.port, () => {
        console.log('Running server on port %s', this.port);
    });
  }

  private setMongoose() {
    mongoose.connect('mongodb://localhost:27017/fejku', { useNewUrlParser: true })
      .then(() => {
        console.log('Connected to DB!');
      })
      .catch(() => {
        console.log('Failed connecting to DB!');
      });
  }

  private setSocketIo() {
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
  }

  private setRoutes() {
    this.app.use('/crawler', CrawlerController);
  }

  public getApp(): express.Application {
    return this.app;
  }
}

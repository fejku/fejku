import { Router, Request, Response } from 'express';
import * as cheerio from 'cheerio';

import { Check } from './check';
import { Manga } from './models/manga';
import { send } from 'q';

const router: Router = Router();

router.get('/', (req, res) => {
  Manga.find({}, (err, manga) => {
    res.json(manga);
  });
});

// router.use('/', (req: Request, res: Response) => {
//   console.log(req.body);
//   res.send('test');


  // const manga = new Manga({
  //   name: 'One Punch Man',
  //   url: 'https://mangadex.org/manga/7139/one-punch-man',
  //   newestChapter: '1',
  //   myActualChapter: '1',
  // });
  // manga.save().then(createdManga => {
  //   res.status(200).send('');
  // });
  // const $ = cheerio.load(await Check.fetchSite('https://mangadex.org/manga/7139/one-punch-man'));
  // res.send(Check.parseMangaDexSite($));
// });

export const CrawlerController: Router = router;

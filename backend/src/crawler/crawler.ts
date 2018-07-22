import { Router, Request, Response } from 'express';
import * as cheerio from 'cheerio';

import { Check } from './check';

import { send } from 'q';
import { Manga } from './schemas/manga';

const router: Router = Router();

router.get('/', async (req, res) => {
  Manga.find({}, async (err, mangaList) => {
    for (const manga of mangaList) {
      const $ = cheerio.load(await Check.fetchSite(manga.url));
      const chapterNumber = Check.parseMangaDexSite($).chapter;
      if (chapterNumber !== manga.newestChapterNumber) {
        manga.isNew = true;
        manga.newestChapterNumber = chapterNumber;
        // Manga.updateOne({ _id: manga._id }, manga);
      }
    }
    res.json(mangaList);
  });
});

router.post('/', (req, res) => {
  const manga = new Manga({
    name: req.body.name,
    url: req.body.url,
    newestChapterNumber: req.body.newestChapterNumber,
    chapteAddedTime: req.body.chapteAddedTime,
    myActualChapterNumber: req.body.myActualChapterNumber,
  });

  manga.save().then(createdManga => {
    res.status(201).json({ status: true });
  });
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  Manga.deleteOne({ _id: req.params.id}, (err) => {
    res.status(200).json({ status: true });
  });
});

export const CrawlerController: Router = router;

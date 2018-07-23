import { Router, Request, Response } from 'express';
import * as cheerio from 'cheerio';

import { Check } from './check';

import { send } from 'q';
import { Manga } from './schemas/manga';

const router: Router = Router();

// router.get('/', async (req, res) => {
//   Manga.find({}, async (err, mangaList) => {
//     for (const manga of mangaList) {
//       const $ = cheerio.load(await Check.fetchSite(manga.url));
//       const chapterInfo = Check.parseMangaDexSite($, manga.language);
//       if (chapterInfo) {
//         const chapterNumber = chapterInfo.chapter;
//         if (chapterNumber !== manga.newestChapterNumber) {
//           manga.isNew = true;
//           manga.newestChapterNumber = chapterNumber;
//           // Manga.updateOne({ _id: manga._id }, manga);
//         }
//       }
//     }
//     res.json(mangaList);
//   });
// });

router.get('/', (req, res) => {
  Manga.find({})
    .then(mangaList => {
      res.status(200).json(mangaList);
    })
    .catch((err) => {
      res.status(404);
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

  manga.save()
    .then(createdManga => {
      res.status(201).json({ status: true, mangaId: createdManga._id });
    })
    .catch(() => {
      res.status(404);
    });
});

router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  Manga.deleteOne({ _id: req.params.id}, (err) => {
    res.status(200).json({ status: true });
  });
});

router.get('/chaper-number/:id', (req, res) => {
  Manga.findById(req.params.id)
    .then(async manga => {
      const $ = cheerio.load(await Check.fetchSite(manga.url));
      const chapterInfo = Check.parseMangaDexSite($, manga.language);
      if (chapterInfo) {
        const chapterNumber = chapterInfo.chapter;
        res.status(200).json({ chapterNumber: chapterNumber });
      }
      res.status(404);
    });
});

router.patch('/:id', (req, res) => {
  Manga.findById(req.params.id, (err, manga) => {
    manga.name = req.body.name;
    manga.url = req.body.url;
    manga.myActualChapterNumber = req.body.myActualChapterNumber;

    manga.save((err, updatedManga) => {
      res.status(200).json(updatedManga);
    });
  });


  // const manga = new Manga({
  //   name: req.body.name,
  //   url: req.body.url,
  //   newestChapterNumber: req.body.newestChapterNumber,
  //   chapteAddedTime: req.body.chapteAddedTime,
  //   myActualChapterNumber: req.body.myActualChapterNumber,
  // });
});

export const CrawlerController: Router = router;

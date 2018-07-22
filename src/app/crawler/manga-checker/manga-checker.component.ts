import { Component, OnInit } from '@angular/core';
import { MangaCheckerService } from './manga-checker.service';
import { Manga } from './manga.model';

@Component({
  selector: 'app-manga-checker',
  templateUrl: './manga-checker.component.html',
  styleUrls: ['./manga-checker.component.css']
})
export class MangaCheckerComponent implements OnInit {

  formularzWidoczny = false;
  mangaList: Manga[] = [];
  manga: Manga;

  constructor(private service: MangaCheckerService) { }

  ngOnInit() {
    this.manga = {
      _id: null,
      name: null,
      url: null,
      chapteAddedTime: null,
      myActualChapterNumber: null,
      newestChapterNumber: null
    };

    this.getMangaList();
  }

  addNewManga() {
    this.formularzWidoczny = false;

    this.service.addManga(this.manga).subscribe(() => {
      this.getMangaList();
    });
  }

  getMangaList() {
    this.service.getMangaList().subscribe((data: Manga[]) => {
      this.mangaList = data;
    });
  }

  onUsun(mangaId: string) {
    this.service.removeManga(mangaId).subscribe(() => {
      this.getMangaList();
    });
  }

}

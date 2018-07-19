import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
      name: null,
      url: null,
      chapteAddedTime: null,
      myActualChapterNumber: null,
      newestChapterNumber: null
    };
    this.service.getMangaList().subscribe((data: Manga[]) => {
      console.log('QWE', data);
      this.mangaList = data;
    });
  }

  addNewManga() {
    this.formularzWidoczny = false;

    this.service.addManga(this.manga);
  }

}

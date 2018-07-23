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
  tryb = '';
  mangaList: Manga[] = [];
  manga: Manga;

  constructor(private service: MangaCheckerService) { }

  ngOnInit() {
    this.manga = {
      myActualChapterNumber: '0',
    };

    this.getMangaList();
  }

  addNewManga() {
    this.service.addManga(this.manga).subscribe(() => {
      // this.getMangaList();
      this.mangaList.push(this.manga);
      this.getMangaDetails(this.manga);
    });
  }

  getMangaList() {
    this.service.getMangaList().subscribe((data: Manga[]) => {
      this.mangaList = data;
      this.mangaList.forEach(manga => {
        this.getMangaDetails(manga);
      });
    });
  }

  getMangaDetails(manga: Manga) {
    this.service.getChapterNumber(manga.id).subscribe((chapterNumner) => {
      manga.newestChapterNumber = chapterNumner;
    });
  }

  onDodajMange() {
    this.formularzWidoczny = true;
    this.tryb = 'Dodaj';
  }

  onEdytujMange(manga: Manga) {
    this.formularzWidoczny = true;
    this.tryb = 'Edytuj';
    this.manga = manga;
  }

  onUsunMange(mangaId: string) {
    this.service.removeManga(mangaId).subscribe(() => {
      this.getMangaList();
    });
  }

  onSave() {
    this.formularzWidoczny = false;

    if (this.tryb = 'Dodaj') {
      this.addNewManga();
    } else {
      this.service.editManga(this.manga).subscribe();
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from './manga.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaCheckerService {
  private mangaList: Manga[] = [];

  constructor(private http: HttpClient) { }

  addManga(manga: Manga) {
    this.http.post('http://localhost:3000/crawler', manga)
      .subscribe(responseData => {
        this.mangaList.push(manga);
      });
  }

  getMangaList(): Observable<Manga[]> {
    return this.http.get<Manga[]>('http://localhost:3000/crawler');
  }
}

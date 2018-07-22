import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from './manga.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Manga } from 'backend/src/crawler/schemas/manga';

@Injectable({
  providedIn: 'root'
})
export class MangaCheckerService {

  constructor(private http: HttpClient) { }

  addManga(manga: Manga): Observable<{status: boolean}> {
    return this.http.post<{status: boolean}>('http://localhost:3000/crawler', manga);
  }

  getMangaList(): Observable<Manga[]> {
    return this.http.get<any[]>('http://localhost:3000/crawler')
    .pipe(
      map(mangaList => mangaList.map(manga => ({
        id: manga._id,
        isMangaNew: manga.isMangaNew,
        myActualChapterNumber: manga.myActualChapterNumber,
        name: manga.name,
        newestChapterNumber: manga.newestChapterNumber,
        url: manga.url,
      })))
    );
  }

  removeManga(mangaId: string): Observable<{status: boolean}> {
    return this.http.delete<{status: boolean}>('http://localhost:3000/crawler/' + mangaId);
  }
}

import { Schema, model, Document, Model } from 'mongoose';
import { IManga } from '../interfaces/manga';

export interface IMangaModel extends IManga, Document {}

export const mangaSchema: Schema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  newestChapterNumber: { type: String, required: false },
  chapteAddedTime: { type: Date, required: false },
  myActualChapterNumber: { type: String, required: false },
  isNewManga: { type: Boolean, required: true, default: false },
  language: { type: String, required: false },
});
// mangaSchema.pre('save', next => {

//   next();
// });

export const Manga: Model<IMangaModel> = model<IMangaModel>('Manga', mangaSchema);

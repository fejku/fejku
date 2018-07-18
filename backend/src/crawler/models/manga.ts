import { Schema, model } from 'mongoose';

const mangaSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  newestChapterNumber: { type: String, required: false },
  chapteAddedTime: { type: Date, required: false },
  myActualChapterNumber: { type: String, required: false },
});

export const Manga = model('Manga', mangaSchema);

import axios from 'axios';

export class Check {
  public static async fetchSite(url): Promise<string> {
    const { data } = await axios.get(url);
    return data;
  }

  public static parseMangaDexSite($, language: string): {chapter: string, addedTime: string} {
    let chaptersList = $('.tab-content tbody tr');
    if (language) {
      chaptersList = chaptersList.filter((i, el) => $(el).children('td').eq(3).children().attr('title') === language);
    }
    return chaptersList
      .map((i, el) =>
        ({
          chapter: $(el).children('td').eq(1).children().data('chapter-num'),
          addedTime: $(el).children('td').eq(7).children().attr('datetime'),
        }))
      .get(0);
  }
}

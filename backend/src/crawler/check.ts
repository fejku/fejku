import axios from 'axios';

export class Check {
  public static async fetchSite(url): Promise<string> {
    const { data } = await axios.get(url);
    return data;
  }

  public static parseMangaDexSite($, language: string = 'English'): {chapter: string, addedTime: string} {
    return $('.tab-content tbody tr')
      .filter((i, el) => $(el).children('td').eq(3).children().attr('title') === language)
      .map((i, el) =>
        ({
          chapter: $(el).children('td').eq(1).children().data('chapter-num'),
          addedTime: $(el).children('td').eq(7).children().attr('datetime'),
        }))
      .get(0);
  }
}

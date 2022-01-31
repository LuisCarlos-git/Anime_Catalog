export type GetMangaResponse = {
  data: GetMangaResponseData[];
};

type GetMangaResponseData = {
  mal_id: number;
  title_english: string;
  synopsis: string;
  genres: GetMangaResponseDataGenres[];
  images: GetMangaResponseDataImages;
  scored: number;
};

type GetMangaResponseDataGenres = {
  mal_id: number;
  name: string;
};

type GetMangaResponseDataImages = {
  webp: {
    image_url: string;
    large_image_url: string;
    small_image_url: string;
  };
};

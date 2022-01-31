import { mangaApi } from '.';
import { GetMangaResponse } from './models';

const getTopMangas = async () => {
  const response = await mangaApi.get<GetMangaResponse>('top/manga');

  return response.data.data;
};

export const services = {
  getTopMangas,
};

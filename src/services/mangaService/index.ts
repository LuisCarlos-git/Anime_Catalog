import axios from 'axios';

const BASE_URL = 'https://api.jikan.moe/v4';

export const mangaApi = axios.create({
  baseURL: BASE_URL,
});

import { api } from '../instance';

interface GetEpisodeByUrl {
  url: string;
}

export const getEpisodeByUrl = async ({ url }: GetEpisodeByUrl) => api.get<Episode>(url);

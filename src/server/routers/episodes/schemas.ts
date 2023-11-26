import { z } from 'zod';

export const EPISODES_INPUT = {
  getEpisodeForCard: z.object({
    url: z.string()
  })
};

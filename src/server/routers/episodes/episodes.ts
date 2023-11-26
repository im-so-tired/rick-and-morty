import { trpc } from '@/server/trpc';
import { wrapSuccess } from '@/server/utils';
import { procedure } from '@/server/utils/procedure';
import { EPISODES_INPUT } from '@/server/routers/episodes/schemas';
import { episodesApi } from '@/server/utils/api/episode';

export const episodesRouter = trpc.router({
  getEpisodeForCard: procedure.input(EPISODES_INPUT.getEpisodeForCard).query(async ({ input }) => {
    const getEpisodeResponse = await episodesApi.getEpisodeByUrl({ url: input.url });
    return wrapSuccess(getEpisodeResponse.data);
  })
});

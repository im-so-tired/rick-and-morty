import { createGetEpisodeForCharacterCard } from '@/trpsRequests/getEpisodeForCharacterCard';
import { createDomain, sample } from 'effector';
import { debug } from 'patronum';

const firstSeenDomain = createDomain('firstSeenDomain');

const getEpisodeFx = createGetEpisodeForCharacterCard(firstSeenDomain);
const $isLoading = getEpisodeFx.pending;
const getEpisode = firstSeenDomain.createEvent<{ episodeUrl: string }>();
sample({
  clock: getEpisode,
  filter: ({ episodeUrl }) => Boolean(episodeUrl),
  target: getEpisodeFx
});

const $episode = firstSeenDomain.createStore<Episode | null>(null);

sample({
  clock: getEpisodeFx.doneData,
  filter: (res) => Boolean(res.success),
  fn: (res) => res.response,
  target: $episode
});

export { $isLoading, getEpisode, $episode };

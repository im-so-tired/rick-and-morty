import { trpc } from '@/utils/trpc';
import { createTrpsRequest } from '.';
import { Domain } from 'effector';

interface GetEpisodeForCharacterCardParams {
  episodeUrl: string;
}

const request = ({ episodeUrl }: GetEpisodeForCharacterCardParams) =>
  trpc.getEpisodeForCard.query({ url: episodeUrl });

export const createGetEpisodeForCharacterCard = (domain: Domain) =>
  createTrpsRequest({ domain, fn: request, name: 'getEpisodeForCharacterCard' });

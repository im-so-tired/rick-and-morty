import { trpc } from '@/utils/trpc';
import { createTrpsRequest } from '.';
import { Domain } from 'effector';

const request = (filters: CharacterFilter) => trpc.getCharacters.query({ params: filters });

export const createGetCharactersRequest = (domain: Domain) =>
  createTrpsRequest({ domain, fn: request, name: 'getCharacters' });

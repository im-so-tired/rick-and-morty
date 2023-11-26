'use client';

import { createDomain, restore, sample } from 'effector';
import { $gender, $name, $status } from '@/app/characters/components/Filters/ClientFilters';
import { debounce, debug } from 'patronum';
import { createGetCharactersRequest } from '@/trpsRequests/getCharacters';

export const charactersPageDomain = createDomain('characters page');

// Fetch characters
const fetchCharactersFx = createGetCharactersRequest(charactersPageDomain);

export const $isFetching = fetchCharactersFx.pending;
export const fetchCharacters = charactersPageDomain.createEvent();

const debouncedName = debounce({
  source: $name,
  timeout: 1000
});

sample({
  clock: fetchCharacters,
  source: { name: $name, status: $status, gender: $gender },
  fn: (data): CharacterFilter => ({
    name: data.name,
    status: data.status !== 'all' ? data.status : undefined,
    gender: data.gender !== 'all' ? data.gender : undefined
  }),
  target: fetchCharactersFx
});

sample({
  clock: [debouncedName, $gender, $status],
  target: fetchCharacters
});

export const $characters = charactersPageDomain.createStore<Character[]>([]);

sample({
  clock: fetchCharactersFx.doneData,
  fn: (res: ServerResponse<Character>) => res.response.results,
  target: $characters
});

// Character modal
export const setIsOpenCharacterModal = charactersPageDomain.event<boolean>();
export const $isOpenCharacterModal = restore(setIsOpenCharacterModal, false);

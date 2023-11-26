'use client';

import { Box, Space, Title } from '@mantine/core';
import { CharactersLoading, ClientFilters } from '@/app/characters/components';
import {
  $isFetching,
  fetchCharacters,
  $characters,
  setIsOpenCharacterModal
} from '@/app/characters/client/store';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { CharacterCard } from '@/components';
import { FirstSeen } from '@/components/CharacterCard/components';
import { toast } from 'react-toastify';

const CharactersClientPage = () => {
  const characters = useStore($characters);
  const isFetching = useStore($isFetching);

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <Box>
      <Title order={3} mb={20}>
        Filters
      </Title>
      <ClientFilters />
      <Space h="md" />
      {isFetching ? (
        <Title order={2}>
          <CharactersLoading />
        </Title>
      ) : (
        <div className="card_characters_container">
          {characters.map((char) => (
            <CharacterCard
              FirstSeen={<FirstSeen.client episodeUrl={char.episode[0]} />}
              key={char.id}
              character={char}
              onClick={() => setIsOpenCharacterModal(true)}
            />
          ))}
        </div>
      )}
    </Box>
  );
};

export default CharactersClientPage;

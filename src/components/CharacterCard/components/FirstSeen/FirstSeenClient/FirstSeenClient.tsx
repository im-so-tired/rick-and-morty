import { FC, useEffect } from 'react';
import { FirstSeenProps } from '@/components/CharacterCard/components/FirstSeen/types';
import { Box, Text } from '@/components/Mantine';
import { getEpisode, $isLoading, $episode } from './store';
import { useStore } from 'effector-react';

export const FirstSeenClient: FC<FirstSeenProps> = ({ episodeUrl }) => {
  const episode = useStore($episode);
  const isLoading = useStore($isLoading);

  useEffect(() => {
    getEpisode({ episodeUrl: 'https://rickandmortyapi.com/api/episode/2222222' });
  }, [episodeUrl]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box>
      <Text c="dimmed">Last known location:</Text>
      <Text fz="lg" c="white">
        {episode ? episode.name : 'Unknown'}
      </Text>
    </Box>
  );
};

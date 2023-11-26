import { Box, Text } from '@/components/Mantine';
import React, { FC } from 'react';
import axios from 'axios';

interface FirstSeenProps {
  episodeUrl: string;
}

export const FirstSeenServer: FC<FirstSeenProps> = async ({ episodeUrl }) => {
  const episodeResponse = await axios<Episode>(episodeUrl);
  const episode = episodeResponse.data;

  return (
    <Box>
      <Text c="dimmed">Last known location:</Text>
      <Text fz="lg" c="white">
        {episode.name}
      </Text>
    </Box>
  );
};

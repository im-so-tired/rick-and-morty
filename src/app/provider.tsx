'use client';

import { CacheProvider } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import { FC } from 'react';
import { useGluedEmotionCache } from '@/hooks';
import { ToastContainer } from '@/components/ToastContainer';
import 'react-toastify/dist/ReactToastify.css';

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider: FC<ProviderProps> = ({ children }) => {
  const cache = useGluedEmotionCache();

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
        theme={{ colorScheme: 'dark' }}
      >
        {children}
        <ToastContainer />
      </MantineProvider>
    </CacheProvider>
  );
};

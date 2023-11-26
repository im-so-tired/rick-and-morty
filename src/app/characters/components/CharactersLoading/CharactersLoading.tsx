import { FC } from 'react';
import { Skeleton } from '@/components/Mantine';

export const CharactersLoading: FC = () => {
  return (
    <div className="card_characters_container">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <Skeleton key={i} height={220} radius="md" />
        ))}
    </div>
  );
};

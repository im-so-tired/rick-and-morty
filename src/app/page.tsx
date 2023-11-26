import { FC, Suspense } from 'react';
import { CharacterCard } from '@/components';
import { caller } from '@/server/routers';
import { getRandomCharactersPage } from '@/utils/helpers/getRandomCharactersPage';
import { FirstSeen } from '@/components/CharacterCard/components';
import { CharactersLoading } from '@/app/characters/components';

export const dynamic = 'force-dynamic';

const CharactersServerPage = async () => {
  const CharacterList: FC = async () => {
    const { response: totalPages } = await caller.getTotalPages();

    const characters = await caller.getCharactersForHomePage({ totalPages });
    return (
      <div className="card_characters_container">
        {characters.map((char) => (
          <CharacterCard
            FirstSeen={<FirstSeen.server episodeUrl={char.episode[0]} />}
            key={char.id}
            character={char}
          />
        ))}
      </div>
    );
  };

  return (
    <Suspense fallback={<CharactersLoading />}>
      <CharacterList />
    </Suspense>
  );
};

export default CharactersServerPage;

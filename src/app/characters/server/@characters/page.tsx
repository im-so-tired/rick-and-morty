import { CharacterCard } from '@/components';
import { caller } from '@/server/routers';
import { FirstSeen } from '@/components/CharacterCard/components';

export const dynamic = 'force-dynamic';

interface CharactersServerPageProps {
  searchParams?: CharacterFilter;
}

const CharactersServer = async ({ searchParams }: CharactersServerPageProps) => {
  const charactersResponse = await caller.getCharacters({
    params: searchParams
  });

  const characters = charactersResponse.response.results;

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

export default CharactersServer;

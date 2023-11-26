import { Container, Flex, Box, Title, Image } from '@/components/Mantine';
import React, { FC } from 'react';
import { caller } from '@/server/routers';

interface CharacterPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }];
}

const CharacterPage: FC<CharacterPageProps> = async ({ params }: any) => {
  const characterResponse = await caller.getCharacterById({ id: +params.id });

  const character = characterResponse.response.data;
  return (
    <Container w="75%">
      <Flex gap="lg">
        <Image radius="md" src={character.image} height={500} width={400} alt="character" />
        <Box>
          <Title>{character.name}</Title>
        </Box>
      </Flex>
    </Container>
  );
};

export default CharacterPage;

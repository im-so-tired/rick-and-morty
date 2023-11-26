import { FC, MouseEventHandler, ReactNode } from 'react';
import { Flex, Card, Title, Group, Text, Stack, Box } from '../Mantine';
import { CharacterImage, Indicator } from './components';
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
  character: Character;
  FirstSeen: ReactNode;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character, FirstSeen, ...rest }) => {
  return (
    <Card component="li" radius="md" p={0} {...rest}>
      <Flex>
        <CharacterImage src={character.image} />
        <Stack justify="space-between" spacing={0} className={styles.info_container} p={13.5}>
          <Box>
            <Title c="white" order={3}>
              {character.name}
            </Title>
            <Group spacing={6}>
              <Indicator status={character.status} />
              <Text c="white">
                {character.status} - {character.species}
              </Text>
            </Group>
          </Box>
          <Box>
            <Text c="dimmed">Last known location:</Text>
            <Text fz="lg" c="white">
              {character.location.name}
            </Text>
          </Box>
          {FirstSeen}
        </Stack>
      </Flex>
    </Card>
  );
};

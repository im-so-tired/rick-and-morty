'use client';

import { Center, Title, Button, Flex } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/utils/constants/routes';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { push } = useRouter();

  const errorMessage =
    error.digest === '1010458315' ? 'Сharacters not found' : 'Something went wrong!';

  const onClick = async () => {
    await reset();
    await push(ROUTES.CHARACTERS.SERVER);
  };

  return (
    <Center h={100} bg="var(--mantine-color-gray-light)">
      <Flex direction="column" align="center" gap={20}>
        <Title order={2}>{errorMessage}</Title>
        <Button onClick={onClick}>Try again</Button>
      </Flex>
    </Center>
  );
}

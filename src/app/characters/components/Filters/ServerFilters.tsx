import { Flex, Input, InputLabel, Button, Space, Chip } from '@/components/Mantine';
import { FC } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/utils/constants/routes';

interface ServerFiltersProps {
  filters?: {
    name?: string;
    status?: string;
    gender?: string;
  };
}

export const ServerFilters: FC<ServerFiltersProps> = ({ filters }) => {
  return (
    <form>
      <InputLabel>Name</InputLabel>
      <Flex gap="lg">
        <Input w={250} id={'name'} name={'name'} defaultValue={filters?.name ?? ''} />
        <Button type="submit" color="gray">
          filter
        </Button>
      </Flex>
      <Space h="xs" />
      <InputLabel>Status</InputLabel>
      <Flex gap="xs">
        {['all', 'alive', 'dead', 'unknown'].map((status) => (
          <Link
            key={status}
            href={{
              pathname: ROUTES.CHARACTERS.SERVER,
              query: { ...filters, status: status === 'all' ? undefined : status }
            }}
          >
            <Chip>{status}</Chip>
          </Link>
        ))}
        {filters?.status && (
          <input
            style={{ display: 'none' }}
            id={'status'}
            name={'status'}
            defaultValue={filters?.status}
          />
        )}
      </Flex>
      <Space h="xs" />
      <InputLabel>Gender</InputLabel>
      <Flex gap="xs">
        {['all', 'male', 'female', 'genderless', 'unknown'].map((gender) => (
          <Link
            key={gender}
            href={{
              pathname: ROUTES.CHARACTERS.SERVER,
              query: { ...filters, gender: gender === 'all' ? undefined : gender }
            }}
          >
            <Chip>{gender}</Chip>
          </Link>
        ))}
        {filters?.gender && (
          <input
            style={{ display: 'none' }}
            id={'gender'}
            name={'gender'}
            defaultValue={filters?.gender}
          />
        )}
      </Flex>
    </form>
  );
};

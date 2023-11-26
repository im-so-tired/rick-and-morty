import { Space, Title } from '@/components/Mantine';
import { ServerFilters } from '@/app/characters/components';

export const dynamic = 'force-dynamic';

interface CharactersServerPageProps {
  searchParams?: {
    page: string;
    name: Character['name'];
    status: Character['status'];
    gender: Character['gender'];
  };
}

const CharactersServerPage = async ({ searchParams }: CharactersServerPageProps) => {
  const filters = {
    ...(searchParams?.status && { status: searchParams.status }),
    ...(searchParams?.gender && { gender: searchParams.gender }),
    ...(searchParams?.name && { name: searchParams.name })
  };

  return (
    <>
      <Title order={3} mb={20}>
        Filters
      </Title>
      <ServerFilters filters={filters} />
      <Space h="md" />
    </>
  );
};

export default CharactersServerPage;

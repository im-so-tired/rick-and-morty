import { api } from '../instance';
import { API_ROUTES } from '@/server/utils/constants';

interface GetCharacterByIdParams {
  id: number;
}

export const getCharacterById = async ({ id }: GetCharacterByIdParams) =>
  api.get<Character>(API_ROUTES.CHARACTER(id));

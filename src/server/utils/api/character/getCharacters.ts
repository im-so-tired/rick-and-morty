import { api } from '../instance';
import { API_ROUTES } from '@/server/utils/constants';
import { AxiosRequestConfig } from 'axios';

interface GetCharactersParams {
  params?: CharacterFilter;
  config?: AxiosRequestConfig;
}

type GetCharactersResponse = Result<Character>;

export const getCharacters = async (args?: GetCharactersParams) =>
  api.get<GetCharactersResponse>(API_ROUTES.CHARACTERS, { ...args });

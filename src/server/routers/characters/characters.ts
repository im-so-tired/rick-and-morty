import { trpc } from '@/server/trpc';
import { wrapError, wrapSuccess } from '@/server/utils';
import { CHARACTERS_INPUT } from '@/server/routers/characters/schemas';
import { procedure } from '@/server/utils/procedure';
import { charactersApi } from '@/server/utils/api/character';
import { getRandomCharactersPage } from '@/utils/helpers/getRandomCharactersPage';

export const charactersRouter = trpc.router({
  getCharacters: procedure.input(CHARACTERS_INPUT.getCharacters).query(async ({ input }) => {
    const characters = await charactersApi.getCharacters({ params: input?.params });
    console.log('characters', characters);
    // throw new Error('fjds');
    // return wrapError(characters.data);
    return wrapSuccess(characters.data);
  }),
  getCharactersForHomePage: procedure
    .input(CHARACTERS_INPUT.getCharactersForHomePage)
    .query(async ({ input }) => {
      const getAllCharacterResponse = await charactersApi.getCharacters({
        params: {
          page: getRandomCharactersPage(input.totalPages)
        }
      });
      let characters = getAllCharacterResponse.data.results;

      if (characters.length > 6) {
        characters = characters.slice(0, 6);
      }

      return characters;
    }),
  getTotalPages: trpc.procedure.query(async () => {
    const response = await charactersApi.getCharacters();
    return wrapSuccess(response.data.info.pages);
  }),
  getCharacterById: trpc.procedure
    .input(CHARACTERS_INPUT.getCharacterById)
    .query(async ({ input }) => {
      const response = await charactersApi.getCharacterById({ id: input.id });
      return wrapSuccess(response);
    })
});

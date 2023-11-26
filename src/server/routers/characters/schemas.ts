import * as yup from 'yup';
import { z } from 'zod';

export const CHARACTERS_INPUT = {
  getCharacters: z
    .object({
      params: z
        .object({
          page: z.number().optional(),
          name: z.string().optional(),
          status: z.union([z.literal('alive'), z.literal('dead'), z.literal('unknown')]).optional(),
          type: z.string().optional(),
          species: z.string().optional(),
          gender: z
            .union([
              z.literal('female'),
              z.literal('genderless'),
              z.literal('male'),
              z.literal('unknown')
            ])
            .optional()
        })
        .optional()
    })
    .optional(),
  getCharacterById: z.object({
    id: z.number()
  }),
  getCharactersForHomePage: z.object({
    totalPages: z.number()
  })
};

import { charactersRouter } from '@/server/routers/characters/characters';
import { episodesRouter } from '@/server/routers/episodes/episodes';
import {trpc} from "../trpc"

export const appRouter = trpc.mergeRouters(charactersRouter, episodesRouter);

export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({})

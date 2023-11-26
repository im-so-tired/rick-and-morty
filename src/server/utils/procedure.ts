import { trpc } from '@/server/trpc';
import { sleepMiddleware } from '@/server/utils/sleepMiddleware';

export const procedure = trpc.procedure.use(sleepMiddleware);

import { trpc } from '@/server/trpc';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const sleepMiddleware = trpc.middleware(async (opts) => {
  await sleep(1000);
  return opts.next();
});

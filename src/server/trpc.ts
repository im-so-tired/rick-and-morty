import { initTRPC } from '@trpc/server';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const trpc = initTRPC.create();

const SleepMiddleware = trpc.middleware(async (opts) => {
  await sleep(3000);
  return opts.next();
});
trpc.procedure.use(SleepMiddleware);

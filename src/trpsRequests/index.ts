import { Domain, sample } from 'effector';
import { toast } from 'react-toastify';

type Request<Params, Response> = (params: Params) => Promise<Response>;

interface CreateTrpsRequest<Params, Response> {
  domain: Domain;
  name: string;
  fn: Request<Params, Response>;
}

export const createTrpsRequest = <Params, Response>(
  params: CreateTrpsRequest<Params, Response>
) => {
  const { domain, fn, name } = params;

  const fxName = `fx.api/${name}`;
  const effect = domain.createEffect<Params, Response>({
    name: fxName,
    handler: (args) => fn(args)
  });

  const handleError = domain.createEffect((error: Error) => toast.error(error.message));

  sample({
    clock: effect.fail,
    fn: (res) => res.error,
    target: handleError
  });

  return effect;
};

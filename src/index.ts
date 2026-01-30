export async function readJson<T>(req: Request): Promise<T> {
  const ct = req.headers.get('content-type') || '';
  if (!ct.includes('application/json')) throw new Error('Content-Type must be application/json');
  return (await req.json()) as T;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

export function preflight() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export function text(body: string) {
  return new Response(body, { headers: corsHeaders });
}

export function json<T>(data: T extends string ? never : T) {
  return Response.json(data, { headers: corsHeaders });
}

export function error(status: number, message?: string) {
  return new Response(message, { status, headers: corsHeaders });
}

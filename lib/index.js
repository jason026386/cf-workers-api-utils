export async function readJson(req) {
    const ct = req.headers.get('content-type') || '';
    if (!ct.includes('application/json'))
        throw new Error('Content-Type must be application/json');
    return (await req.json());
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
export function text(body) {
    return new Response(body, { headers: corsHeaders });
}
export function json(data) {
    return Response.json(data, { headers: corsHeaders });
}
export function error(status, message) {
    return new Response(message, { status, headers: corsHeaders });
}
//# sourceMappingURL=index.js.map
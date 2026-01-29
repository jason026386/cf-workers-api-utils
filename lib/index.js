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
//# sourceMappingURL=index.js.map
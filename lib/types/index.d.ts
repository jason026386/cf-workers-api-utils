export declare function preflight(): Response;
export declare function text(body: string): Response;
export declare function json<T>(data: T extends string ? never : T): Response;
export declare function error(status: number): Response;
//# sourceMappingURL=index.d.ts.map
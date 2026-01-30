export declare function readJson<T>(req: Request): Promise<T>;
export declare function preflight(): Response;
export declare function text(body: string): Response;
export declare function json<T>(data: T extends string ? never : T): Response;
export declare function error(status: number, message?: string): Response;
//# sourceMappingURL=index.d.ts.map
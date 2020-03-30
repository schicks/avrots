declare type AsTypescript<T extends {
    _ts: unknown;
}> = T['_ts'];
export { AsTypescript };

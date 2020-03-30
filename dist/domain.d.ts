declare type AsTypescript<T extends {
    _ts: any;
}> = T['_ts'];
export { AsTypescript };

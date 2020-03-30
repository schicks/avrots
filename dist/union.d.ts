import * as Avro from './avro.domain';
declare type Union<T extends Avro.Type> = T[] & {
    _ts: T['_ts'];
};
declare const Union: <T extends Avro.Type>(types: T[]) => Union<T>;
export { Union };

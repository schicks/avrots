import * as Avro from './avro.domain';
declare type Record<O extends {
    [_: string]: Avro.Type;
}> = Avro.RecordType & {
    _ts: {
        [key in keyof O]: O[key]['_ts'];
    };
};
declare const Record: <O extends {
    [_: string]: Avro.Type;
}>(name: string, fields: O) => Record<O>;
export { Record };

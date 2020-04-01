import * as Avro from './avro.domain';
declare type Field<T extends Avro.RequiredType = Avro.RequiredType> = Avro.Field<T>;
declare const Field: <T extends Avro.RequiredType>(props: T | {
    type: T;
    doc?: string | undefined;
} | {
    type: Avro.Null | T;
    doc?: string | undefined;
    default?: T["_ts"] | null | undefined;
}) => Avro.Field<T>;
declare type Record<O extends {
    [key: string]: Field;
}> = Avro.RecordType & {
    _ts: {
        [key in keyof O]: O[key]['type']['_ts'];
    };
};
declare const Record: <O extends {
    [_: string]: Avro.Field<Avro.RequiredType>;
}>(name: string, fields: O) => Record<O>;
export { Record, Field };

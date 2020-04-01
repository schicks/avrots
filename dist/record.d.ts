import * as Avro from './avro.domain';
declare type RequiredField<T extends Avro.RequiredType> = {
    type: T;
    doc?: string;
};
declare type DefaultedField<T extends Avro.RequiredType> = {
    type: T;
    doc?: string;
    default: T['_ts'];
};
declare type NullableField<T extends Avro.RequiredType> = {
    type: T;
    doc?: string;
    default: null;
};
declare function Field<T extends Avro.RequiredType>(props: RequiredField<T> | T): Avro.RequiredField<T>;
declare function Field<T extends Avro.RequiredType>(props: DefaultedField<T>): Avro.DefaultedField<T>;
declare function Field<T extends Avro.RequiredType>(props: NullableField<T>): Avro.NullableField<T>;
declare type Record<O extends {
    [key: string]: Avro.Field<Avro.RequiredType>;
}> = Avro.RecordType & {
    _ts: {
        [key in keyof O]: O[key]['_ts'];
    };
};
declare const Record: <O extends {
    [_: string]: Avro.Field<Avro.RequiredType>;
}>(name: string, fields: O) => Record<O>;
export { Record, Field };

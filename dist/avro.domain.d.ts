declare type LogicalTypeLabel = string & {
    _type: "logicalTypeLabel";
};
declare type Type = ArrayType | LogicalType | Primitive | RecordType | UnionType;
declare type RequiredType = ArrayType | LogicalType | RecordType | UnionType | Boolean | Int | Long | String;
declare type Boolean = "boolean" & {
    _ts: boolean;
};
declare type Int = "int" & {
    _ts: number;
};
declare type Long = "long" & {
    _ts: number;
};
declare type Null = "null" & {
    _ts: null;
};
declare type String = "string" & {
    _ts: string;
};
declare type Primitive = Boolean | Int | Long | Null | String;
declare type LogicalType = {
    type: Type;
    logicalType: LogicalTypeLabel;
} & {
    _ts: unknown;
};
declare type RecordType = {
    type: "record";
    name: string;
    fields: Field<RequiredType>[];
} & {
    _ts: unknown;
};
declare type ArrayType = {
    type: "array";
    items: Type;
} & {
    _ts: unknown;
};
declare type UnionType = Type[] & {
    _ts: unknown;
};
declare type RequiredField<T extends RequiredType> = {
    type: T;
    doc?: string;
    _ts: T['_ts'];
};
declare type DefaultedField<T extends RequiredType> = {
    type: T;
    doc?: string;
    default: T['_ts'];
    _ts: T['_ts'] | null | undefined;
};
declare type NullableField<T extends RequiredType> = {
    type: T;
    doc?: string;
    default: null;
    _ts: T['_ts'] | null | undefined;
};
declare type Field<T extends RequiredType> = RequiredField<T> | NullableField<T> | DefaultedField<T>;
declare type Schema = RecordType;
export { ArrayType, Boolean, Field, RequiredField, NullableField, DefaultedField, Int, LogicalType, LogicalTypeLabel, Long, Null, Primitive, RecordType, RequiredType, Schema, String, Type, UnionType };

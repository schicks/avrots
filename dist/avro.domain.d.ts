declare type LogicalTypeLabel = string & {
    _type: "logicalTypeLabel";
};
declare type Type = ArrayType | LogicalType | Primitive | RecordType | UnionType;
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
    fields: Field[];
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
declare type Field = {
    name: string;
    type: Type;
};
declare type Schema = RecordType;
export { ArrayType, Boolean, Field, Int, LogicalType, LogicalTypeLabel, Long, Null, Primitive, RecordType, Schema, String, Type, UnionType, };

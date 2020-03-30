declare type LogicalTypeLabel = string & {
    _type: "logicalTypeLabel";
};
declare type Type = Primitive | LogicalType | RecordType | NamedType | UnionType;
declare type NamedType = string & {
    _type: "namedType";
} & {
    _ts: unknown;
};
declare type String = "string" & {
    _ts: string;
};
declare type Null = "null" & {
    _ts: null;
};
declare type Boolean = "boolean" & {
    _ts: boolean;
};
declare type Int = "int" & {
    _ts: number;
};
declare type Long = "long" & {
    _ts: number;
};
declare type Primitive = String | Null | Boolean | Int | Long;
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
declare type UnionType = Type[] & {
    _ts: unknown;
};
declare type Field = {
    name: string;
    type: Type;
};
declare type Schema = RecordType;
export { Type, Field, Schema, UnionType, LogicalType, LogicalTypeLabel, Primitive, RecordType, String, Null, Boolean, Int, Long };

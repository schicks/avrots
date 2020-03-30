declare type LogicalType = string & {
    _type: "logicalType";
};
declare type NamedType = string & {
    _type: "namedType";
};
declare type Type = "string" | "null" | "boolean" | "int" | "long" | {
    type: Type;
    logicalType: LogicalType;
} | RecordType | NamedType | Type[];
declare type RecordType = {
    type: "record";
    name: string;
    fields: Field[];
};
declare type Field = {
    name: string;
    type: Type;
};
declare type Schema = RecordType;
export { Type, Field, Schema, LogicalType };

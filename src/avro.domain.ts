
type LogicalType = string & { _type: "logicalType" }

type NamedType = string & { _type: "namedType" }

type Type =
    | "string"
    | "null"
    | "boolean"
    | "int"
    | "long"
    | { type: Type, logicalType: LogicalType }
    | RecordType
    | NamedType
    | Type[]

type RecordType = {
    type: "record",
    name: string,
    fields: Field[]
}

type Field = {
    name: string,
    type: Type,
}

type Schema = RecordType

export {
    Type,
    Field,
    Schema,
    LogicalType
}
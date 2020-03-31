
type LogicalTypeLabel = string & { _type: "logicalTypeLabel" }


type Type =
    | ArrayType
    | LogicalType
    | Primitive
    | RecordType
    | UnionType

type Boolean = "boolean" & { _ts: boolean }
type Int = "int" & { _ts: number }
type Long = "long" & { _ts: number }
type Null = "null" & { _ts: null }
type String = "string" & { _ts: string }
type Primitive =
    | Boolean
    | Int
    | Long
    | Null
    | String

type LogicalType = {
    type: Type,
    logicalType: LogicalTypeLabel
} & { _ts: unknown }

type RecordType = {
    type: "record",
    name: string,
    fields: Field[]
} & { _ts: unknown }

type ArrayType = {
    type: "array",
    items: Type
} & { _ts: unknown }

type UnionType = Type[] & { _ts: unknown }

type Field = {
    name: string,
    type: Type,
}

type Schema = RecordType

export {
    ArrayType,
    Boolean,
    Field,
    Int,
    LogicalType,
    LogicalTypeLabel,
    Long,
    Null,
    Primitive,
    RecordType,
    Schema,
    String,
    Type,
    UnionType,
}
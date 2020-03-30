
type LogicalTypeLabel = string & { _type: "logicalTypeLabel" }


type Type =
| Primitive
| LogicalType
| RecordType
| NamedType
| UnionType


type NamedType = string & { _type: "namedType" } & {_ts: unknown}

type String = "string" & { _ts: string }
type Null = "null" & { _ts: null }
type Boolean = "boolean" & { _ts: boolean }
type Int = "int" & { _ts: number }
type Long = "long" & { _ts: number }
type Primitive =  
    | String
    | Null
    | Boolean
    | Int
    | Long

type LogicalType = {
    type: Type,
    logicalType: LogicalTypeLabel
} & { _ts: unknown }

type RecordType = {
    type: "record",
    name: string,
    fields: Field[]
} & { _ts: unknown }

type UnionType = Type[] & { _ts: unknown }

type Field = {
    name: string,
    type: Type,
}

type Schema = RecordType

export {
    Type,
    Field,
    Schema,
    UnionType,
    LogicalType,
    LogicalTypeLabel,
    Primitive,
    RecordType,
    String,
    Null,
    Boolean,
    Int,
    Long
}

type LogicalTypeLabel = string & { _type: "logicalTypeLabel" }


type Type =
    | ArrayType
    | LogicalType
    | Primitive
    | RecordType
    | UnionType

type RequiredType =
    | ArrayType
    | LogicalType
    | RecordType
    | UnionType
    | Boolean
    | Int
    | Long
    | String

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
    fields: Field<RequiredType>[]
} & { _ts: unknown }

type ArrayType = {
    type: "array",
    items: Type
} & { _ts: unknown }

type UnionType = Type[] & { _ts: unknown }

type Field<T extends RequiredType> = {
    type: T,
    doc?: string
    _ts: T['_ts']
} | {
    type: T,
    doc?: string,
    default?: T['_ts'],
    _ts: T['_ts']
} | {
    type: [T | Null][] & { _ts: T['_ts'] | null },
    doc?: string,
    default?: null,
    _ts: T['_ts'] | null
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
    RequiredType,
    Schema,
    String,
    Type,
    UnionType
}
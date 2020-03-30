import { Field } from './avro.domain'

type String = Field & {
    _ts: string
}
const String = (name: string): String => ({
    name,
    type: 'string'
} as String)


type Null = Field & {
    _ts: null
}
const Null = (name: string): Null => ({
    name,
    type: 'null'
} as Null)

type Boolean = Field & {
    _ts: boolean
}
const Boolean = (name: string): Boolean => ({
    name,
    type: 'boolean'
} as Boolean)

type Int = Field & {
    _ts: number
}
const Int = (name: string): Int => ({
    name,
    type: 'int'
} as Int)

type Long = Field & {
    _ts: number
}
const Long = (name: string): Long => ({
    name,
    type: 'long'
} as Long)


type Primitive = Field & (
    | String
    | Null
    | Boolean
    | Int
    | Long
)

export {
    String,
    Null,
    Boolean,
    Int,
    Long,
    Primitive
}
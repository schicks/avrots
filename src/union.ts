import * as Avro from './avro.domain'

type Union<T extends Avro.Type> = T[] & {
    _ts: T['_ts']
}
const Union = <T extends Avro.Type>(types: T[]): Union<T> => types as Union<T>

export {
    Union
}
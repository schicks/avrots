import * as Avro from './avro.domain'

type Array<E extends Avro.Type> = Avro.ArrayType & {
    _ts: E['_ts'][]
}
const Array = <E extends Avro.Type>(
    el: E
): Array<E> => ({
    type: "array",
    items: el
} as unknown as Array<E>)

export {
    Array
}
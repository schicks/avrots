import * as Avro from './avro.domain'
import { String } from './primitives'
import { AsTypescript } from './domain'

type LogicalType<T extends Avro.Primitive> = Avro.LogicalType & {
    type: {
        type: T,
        logicalType: Avro.LogicalType
    },
    _ts: T['_ts']
}
const LogicalType = <T extends Avro.Primitive>(
    type: T,
    logicalType: Avro.LogicalTypeLabel,
): LogicalType<T> => ({
    type,
    logicalType
} as unknown as LogicalType<T>)


export {
    LogicalType
}
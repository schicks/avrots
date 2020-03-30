import * as Avro from './avro.domain'
import { Primitive } from './primitives'

type LogicalType<T extends Avro.Field> = Avro.Field & {
    type: {
        type: T,
        logicalType: Avro.LogicalType
    },
    _ts: T
}
const LogicalType = <T extends Primitive>(
    name: string,
    type: T,
    logicalType: Avro.LogicalType,
): LogicalType<T> => ({
    name,
    type: {
        type,
        logicalType
    }
} as LogicalType<T>)

export {
    LogicalType
}
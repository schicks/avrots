import * as Avro from './avro.domain'

type LogicalType<T extends Avro.Primitive> = Avro.LogicalType & {
    type: {
        type: T,
        logicalType: string
    },
    _ts: T['_ts']
}
const LogicalType = <T extends Avro.Primitive>(
    type: T,
    logicalType: string,
): LogicalType<T> => ({
    type,
    logicalType
} as unknown as LogicalType<T>)


export {
    LogicalType
}
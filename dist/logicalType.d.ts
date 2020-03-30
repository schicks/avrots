import * as Avro from './avro.domain';
declare type LogicalType<T extends Avro.Primitive> = Avro.LogicalType & {
    type: {
        type: T;
        logicalType: Avro.LogicalType;
    };
    _ts: T['_ts'];
};
declare const LogicalType: <T extends Avro.Primitive>(type: T, logicalType: Avro.LogicalTypeLabel) => LogicalType<T>;
export { LogicalType };

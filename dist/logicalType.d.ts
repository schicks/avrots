import * as Avro from './avro.domain';
declare type LogicalType<T extends Avro.Field> = Avro.Field & {
    type: {
        type: T;
        logicalType: Avro.LogicalType;
    };
    _ts: T;
};
declare const LogicalType: <T extends import("./primitives").String | import("./primitives").Null | import("./primitives").Boolean | import("./primitives").Int | import("./primitives").Long>(name: string, type: T, logicalType: Avro.LogicalType) => LogicalType<T>;
export { LogicalType };

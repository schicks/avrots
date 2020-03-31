import * as Avro from './avro.domain';
declare type Array<E extends Avro.Type> = Avro.ArrayType & {
    _ts: E['_ts'][];
};
declare const Array: <E extends Avro.Type>(el: E) => Array<E>;
export { Array };

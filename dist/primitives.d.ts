import { Field } from './avro.domain';
declare type String = Field & {
    _ts: string;
};
declare const String: (name: string) => String;
declare type Null = Field & {
    _ts: null;
};
declare const Null: (name: string) => Null;
declare type Boolean = Field & {
    _ts: boolean;
};
declare const Boolean: (name: string) => Boolean;
declare type Int = Field & {
    _ts: number;
};
declare const Int: (name: string) => Int;
declare type Long = Field & {
    _ts: number;
};
declare const Long: (name: string) => Long;
declare type Primitive = Field & (String | Null | Boolean | Int | Long);
export { String, Null, Boolean, Int, Long, Primitive };

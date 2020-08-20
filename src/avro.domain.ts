type Type = ArrayType | LogicalType | Primitive | RecordType | UnionType;

type RequiredType =
  | ArrayType
  | LogicalType
  | RecordType
  | UnionType
  | Boolean
  | Int
  | Long
  | String
  | Double;

type Boolean = "boolean" & { _ts: boolean };
type Int = "int" & { _ts: number };
type Long = "long" & { _ts: number };
type Null = "null" & { _ts: null };
type String = "string" & { _ts: string };
type Double = "double" & { _ts: number };
type Primitive = Boolean | Int | Long | Null | String | Double;

type LogicalType = {
  type: Type;
  logicalType: string;
} & { _ts: unknown };

type RecordType = {
  type: "record";
  name: string;
  fields: Field<RequiredType>[];
} & { _ts: unknown };

type ArrayType = {
  type: "array";
  items: Type;
} & { _ts: unknown };

type UnionType = Type[] & { _ts: unknown };

type RequiredField<T> = {
  type: T;
  doc?: string;
  _ts: T;
};

type DefaultedField<T> = {
  type: T;
  doc?: string;
  default: T;
  _ts: T | null | undefined;
};

type NullableField<T> = {
  type: T;
  doc?: string;
  default: null;
  _ts: T | null | undefined;
};

type Field<T> =
  | RequiredField<T>
  | NullableField<T>
  | DefaultedField<T>;

type Schema = RecordType;

export {
  ArrayType,
  Boolean,
  Field,
  RequiredField,
  NullableField,
  DefaultedField,
  Int,
  LogicalType,
  Long,
  Double,
  Null,
  Primitive,
  RecordType,
  RequiredType,
  Schema,
  String,
  Type,
  UnionType,
};

import * as Avro from "./avro.domain";
import { Union } from "./union";
import { Null } from "./primitives";

type RequiredField<T extends Avro.RequiredType> = {
  type: T;
  doc?: string;
};

type DefaultedField<T extends Avro.RequiredType> = {
  type: T;
  doc?: string;
  default: T["_ts"];
};

type NullableField<T extends Avro.RequiredType> = {
  type: T;
  doc?: string;
  default: null;
};

type UnbrandedField<T extends Avro.RequiredType> =
  | RequiredField<T>
  | NullableField<T>
  | DefaultedField<T>;

function Field<T extends Avro.RequiredType>(
  props: RequiredField<T> | T
): Avro.RequiredField<T["_ts"]>;
function Field<T extends Avro.RequiredType>(
  props: DefaultedField<T>
): Avro.DefaultedField<T["_ts"]>;
function Field<T extends Avro.RequiredType>(
  props: NullableField<T>
): Avro.NullableField<T["_ts"]>;
function Field<T extends Avro.RequiredType>(props: UnbrandedField<T> | T) {
  if (typeof props === "string" || !("doc" in props || "default" in props))
    return { type: props };
  else if ("default" in props && props.default === null) {
    return {
      ...props,
      type: Union([Null(), props.type]),
    };
  } else return props;
}

type Record<
  O extends { [key: string]: Avro.Field<any> },
  _ts extends { [key in keyof O]: O[key]["_ts"] }
> = Avro.RecordType & {
  _ts: _ts;
};
const Record = <
  O extends { [key: string]: Avro.Field<any> },
  _ts extends { [key in keyof O]: O[key]["_ts"] }
>(
  name: string,
  fields: O
): Record<O, _ts> =>
  (({
    type: "record",
    name,
    fields: Object.keys(fields).map((name) => ({ name, ...fields[name] })),
  } as unknown) as Record<O, _ts>);

export { Record, Field };

import * as Avro from './avro.domain'

type UnbrandedField<T extends Avro.RequiredType> = {
    type: T,
    doc?: string
} | {
    type: T | Avro.Null,
    doc?: string,
    default?: T['_ts'] | null,
}


type Field<T extends Avro.RequiredType = Avro.RequiredType> = Avro.Field<T>
const Field = <T extends Avro.RequiredType>(props: UnbrandedField<T> | T): Field<T> => ('doc' in props || 'default' in props ? props : { type: props }) as Field<T>

type Record<O extends { [key: string]: Field }> = Avro.RecordType & {
    _ts: { [key in keyof O]: O[key]['type']['_ts'] }
}
const Record = <O extends { [_: string]: Field }>(
    name: string,
    fields: O
): Record<O> => ({
    type: "record",
    name,
    fields: Object.keys(fields).map(name => ({ name, ...fields[name] }))
} as unknown as Record<O>)


export { Record, Field }
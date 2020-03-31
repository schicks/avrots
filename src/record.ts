import * as Avro from './avro.domain'

type Record<O extends {[_: string]: Avro.Type}> = Avro.RecordType & {
    _ts: { [key in keyof O]: O[key]['_ts']}
}
const Record = <O extends {[_: string]: Avro.Type}>(
    name: string, 
    fields: O
): Record<O> => ({
    type: "record",
    name,
    fields: Object.keys(fields).map(name => ({name, type: fields[name]}))
} as unknown as Record<O>)

export { Record }
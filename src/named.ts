import * as Avro from './avro.domain'

export const Named = <T extends Avro.RecordType>(schema: T): T => schema.name as any
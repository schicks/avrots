import * as Avro from './avro.domain'

type String = Avro.String
const String = (): Avro.String => 'string' as Avro.String

type Null = Avro.Null
const Null = (): Avro.Null => 'null' as Avro.Null

type Boolean = Avro.Boolean
const Boolean = (): Avro.Boolean => 'boolean' as Avro.Boolean

type Int = Avro.Int
const Int = (): Avro.Int => 'int' as Avro.Int

type Long = Avro.Long
const Long = (): Avro.Long => 'long' as Avro.Long

type Double = Avro.Double
const Double = (): Avro.Double => 'double' as Avro.Double

export {
    String,
    Null,
    Boolean,
    Int,
    Long,
    Double
}
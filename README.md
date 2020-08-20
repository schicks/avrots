# avrots
A DSL for simultaneously constructing an avro schema and the corresponding typescript type. Inspired by pelotom/runtypes and joewood/avro-typescript.


## Usage

Construct an avro schema using the DSL.

```typescript
import {Record, Field, Array, String, Named} from 'avrots'

const Toy = Record('toy', {
  name: Field(String())
})

const Person = Record('person', {
  name: Field({default: null, type: String()}),
  ownToys: Field(Array(Toy)),
  covetedToys: Field(Array(Named(Toy))) // reference named types from earlier in the schema, since avro doesn't like redundant names
})
```

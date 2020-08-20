# avrots
A DSL for simultaneously constructing an avro schema and the corresponding typescript type. Inspired by pelotom/runtypes and joewood/avro-typescript.


## Usage

Construct an avro schema using the DSL.

```typescript
import {Record, Field, Array, String, Named, AsTypescript} from 'avrots'

const Toy = Record('toy', {
  name: Field(String())
})

const Person = Record('person', {
  name: Field({default: null, type: String()}),
  ownToys: Field(Array(Toy)),
  covetedToys: Field(Array(Named(Toy))) // reference named types from earlier in the schema, since avro doesn't like redundant names
})
```

The generated object is already a valid avro schema, so we can use it directly in that way, but we can also use it to get the typescript type of an object that meets the schema.

```typescript
type Person = AsTypescript<typeof Person>

const timmy: Person = {
 ownToys: [],
 covetedToys: ['guitar'] //type error! string is not a Toy.
}
```

This allows us to register a schema with some service and use that schema to get compile time validation that our code will produce records that are valid to that service.

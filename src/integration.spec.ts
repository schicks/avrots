import { Record, Field } from './record'
import {
    String,
    Null,
    Boolean,
    Int,
    Long,
} from './primitives'
import * as avro from 'avsc'
import { AsTypescript } from './domain'
import { chain } from 'ramda'

type TypeMapEntry<T extends { _ts: unknown }> = {
    type: T,
    roundTrippable: AsTypescript<T>[],
    valid: AsTypescript<T>[],
    invalid: unknown[]
}

const types: TypeMapEntry<{ _ts: unknown }>[] = [
    {
        type: String(),
        valid: [],
        roundTrippable: ["the quick brown fox"],
        invalid: [null, 5, undefined, { string: "the quick brown fox" }, new Date()]
    },
    {
        type: Long(),
        valid: [],
        roundTrippable: [5],
        invalid: [null, "the quick brown fox", undefined, { string: "the quick brown fox" }, new Date()]
    },
    {
        type: Null(),
        valid: [],
        roundTrippable: [null],
        invalid: [5, "the quick brown fox", undefined, { string: "the quick brown fox" }, new Date()]
    },
    {
        type: Boolean(),
        valid: [],
        roundTrippable: [true, false],
        invalid: [5, null, "the quick brown fox", undefined, { string: "the quick brown fox" }, new Date()]
    },
    {
        type: Int(),
        valid: [],
        roundTrippable: [5],
        invalid: [4.5, null, "the quick brown fox", undefined, { string: "the quick brown fox" }, new Date()]
    },
    {
        type: Record('person', {
            name: Field(String()),
            age: Field({ type: Int(), default: 52 })
        }),
        valid: [{ name: 'dave' }],
        roundTrippable: [{ name: 'dave', age: 37 }],
        invalid: [4.5, null, "the quick brown fox", undefined, { age: 37 }, new Date(), { name: 4, age: 37 }, { name: 'dave', age: '37' }]
    }
]


describe('serialization', () => {
    test.each(
        chain(
            ({ type, roundTrippable }) => roundTrippable.map(instance => [type, instance] as const),
            types
        )
    )('Should roundtrip when there are no missing fields', (record, instance) => {
        const type = avro.Type.forSchema(record as any)
        expect(instance).toEqual(type.fromBuffer(type.toBuffer(instance)))
    })

    test.each(
        chain(
            ({ type, valid }) => valid.map(instance => [type, instance] as const),
            types
        )
    )('Should serialize valid examples', (record, instance) => {
        const type = avro.Type.forSchema(record as any)
        expect(() => type.toBuffer(instance)).not.toThrow()
    })

    test.each(
        chain(
            ({ type, invalid }) => invalid.map(instance => [type, instance] as const),
            types
        )
    )('Should not serialize invalid entries', (record, instance) => {
        const type = avro.Type.forSchema(record as any)
        expect(() => type.toBuffer(instance)).toThrow()
    })
})
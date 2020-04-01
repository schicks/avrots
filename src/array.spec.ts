import { AsTypescript } from './domain'
import { Array } from './array'
import { Record, Field } from './record'
import { Union } from './union'
import { String, Long } from './primitives'


// primitives
let _ = () => {
    const instance = Array(
        String()
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = string[]
    const _actualIsExpected: ExpectedType = null as ActualType
    const _expectedIsActual: ActualType = null as ExpectedType
}

// unions
_ = () => {
    const instance = Array(
        Union([
            String(),
            Long()
        ])
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = (string | number)[]
    const _actualIsExpected: ExpectedType = null as ActualType
    const _expectedIsActual: ActualType = null as ExpectedType
}

// records
_ = () => {
    const instance = Array(
        Record(
            'person',
            {
                name: Field(String()),
                age: Field(Long())
            }
        )
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = ({ name: string, age: number })[]
    const _actualIsExpected: ExpectedType = null as ActualType
    const _expectedIsActual: ActualType = null as ExpectedType
}

// other arrays
_ = () => {
    const instance = Array(
        Union([
            String(),
            Array(Record('person', { name: Field(String()), age: Field(Long()) }))
        ])
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = (string | { name: string, age: number }[])[]
    const _actualIsExpected: ExpectedType = null as ActualType
    const _expectedIsActual: ActualType = null as ExpectedType
}

describe('Array construction', () => {
    test('should construct a valid avro array type', () => {
        expect(Array(String())).toEqual({type: "array", items: 'string'})
    })
})
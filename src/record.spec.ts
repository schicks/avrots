import { AsTypescript } from './domain'
import { Record, Field } from './record'
import { String, Long } from './primitives'


// primitives
let _ = () => {
    const instance = Record(
        'person',
        { name: Field(String()), age: Field(Long()) }
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = { name: string, age: number }
    const _actualIsExpected: ExpectedType = null as unknown as ActualType
    const _expectedIsActual: ActualType = null as unknown as ExpectedType
}

// other records
_ = () => {
    const recordForField = Record(
        'person',
        { name: Field(String()), age: Field(Long()) }
    )
    const recordField = Field<typeof recordForField>(recordForField) // TODO improve refinement on record fields
    const instance = Record(
        'pet',
        {
            name: Field(String()), owner: recordField
        }
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = {
        name: string,
        owner: {
            name: string,
            age: number
        }
    }
    const _actualIsExpected: ExpectedType = null as unknown as ActualType
    const _expectedIsActual: ActualType = null as unknown as ExpectedType
}

// defaulted and nullable fields
_ = () => {
    const instance = Record(
        'person',
        { name: Field({type: String(), default: 'hello!'}), age: Field({type: Long(), default: null}) }
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = { name: string | null | undefined, age: number | null | undefined } // TODO make optional properties optional, not just nullable
    const _actualIsExpected: ExpectedType = null as unknown as ActualType
    const _expectedIsActual: ActualType = null as unknown as ExpectedType
}

describe('Field construction', () => {
    test('Field constructor should allow documentation on a field', () => {
        const docString = "id of the thing"
        const documentedField = Field({
            type: String(),
            doc: docString
        })

        expect(documentedField).toHaveProperty('doc', docString)
    })

    test('Field constructor should allow defaulting on a field', () => {
        const defaultString = "hello world!"
        const defaultedField = Field({
            type: String(),
            default: defaultString
        })

        expect(defaultedField).toHaveProperty('default', defaultString)
    })
})
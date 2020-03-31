import { AsTypescript } from './domain'
import { Union } from './union'
import { Record } from './record'
import { String, Long, Boolean } from './primitives'
import { LogicalType } from './logicalType'


// primitives
let _ = () => {
    const instance = Record(
        'person',
        { name: String(), age: Long() }
    )
    type ActualType = AsTypescript<typeof instance>
    type ExpectedType = { name: string, age: number }
    const _actualIsExpected: ExpectedType = null as ActualType
    const _expectedIsActual: ActualType = null as ExpectedType
}

// other records
_ = () => {
    const instance = Record(
        'pet',
        {
            name: String(), owner: Record(
                'person',
                { name: String(), age: Long() }
            )
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
    const _actualIsExpected: ExpectedType = null as ActualType
    const _expectedIsActual: ActualType = null as ExpectedType
}
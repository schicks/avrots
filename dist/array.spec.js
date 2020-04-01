"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./array");
const record_1 = require("./record");
const union_1 = require("./union");
const primitives_1 = require("./primitives");
// primitives
let _ = () => {
    const instance = array_1.Array(primitives_1.String());
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// unions
_ = () => {
    const instance = array_1.Array(union_1.Union([
        primitives_1.String(),
        primitives_1.Long()
    ]));
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// records
_ = () => {
    const instance = array_1.Array(record_1.Record('person', {
        name: record_1.Field(primitives_1.String()),
        age: record_1.Field(primitives_1.Long())
    }));
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// other arrays
_ = () => {
    const instance = array_1.Array(union_1.Union([
        primitives_1.String(),
        array_1.Array(record_1.Record('person', { name: record_1.Field(primitives_1.String()), age: record_1.Field(primitives_1.Long()) }))
    ]));
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
describe('Array construction', () => {
    test('should construct a valid avro array type', () => {
        expect(array_1.Array(primitives_1.String())).toEqual({ type: "array", items: 'string' });
    });
});

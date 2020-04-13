"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const record_1 = require("./record");
const primitives_1 = require("./primitives");
// primitives
let _ = () => {
    const instance = record_1.Record('person', { name: record_1.Field(primitives_1.String()), age: record_1.Field(primitives_1.Long()) });
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// other records
_ = () => {
    const recordForField = record_1.Record('person', { name: record_1.Field(primitives_1.String()), age: record_1.Field(primitives_1.Long()) });
    const recordField = record_1.Field(recordForField); // TODO improve refinement on record fields
    const instance = record_1.Record('pet', {
        name: record_1.Field(primitives_1.String()), owner: recordField
    });
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// defaulted and nullable fields
_ = () => {
    const instance = record_1.Record('person', { name: record_1.Field({ type: primitives_1.String(), default: 'hello!' }), age: record_1.Field({ type: primitives_1.Long(), default: null }) });
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
describe('Field construction', () => {
    test('Field constructor should allow documentation on a field', () => {
        const docString = "id of the thing";
        const documentedField = record_1.Field({
            type: primitives_1.String(),
            doc: docString
        });
        expect(documentedField).toHaveProperty('doc', docString);
    });
    test('Field constructor should allow defaulting on a field', () => {
        const defaultString = "hello world!";
        const defaultedField = record_1.Field({
            type: primitives_1.String(),
            default: defaultString
        });
        expect(defaultedField).toHaveProperty('default', defaultString);
    });
    test('Nullable fields should append null to the type', () => {
        const defaultedField = record_1.Field({
            type: primitives_1.String(),
            default: null
        });
        expect(defaultedField.type).toContain('null');
    });
});

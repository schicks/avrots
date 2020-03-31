"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const record_1 = require("./record");
const primitives_1 = require("./primitives");
// primitives
let _ = () => {
    const instance = record_1.Record('person', { name: primitives_1.String(), age: primitives_1.Long() });
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// other records
_ = () => {
    const instance = record_1.Record('pet', {
        name: primitives_1.String(), owner: record_1.Record('person', { name: primitives_1.String(), age: primitives_1.Long() })
    });
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};

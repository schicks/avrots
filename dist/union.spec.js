"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const union_1 = require("./union");
const primitives_1 = require("./primitives");
const logicalType_1 = require("./logicalType");
// primitives
let _ = () => {
    const instance = union_1.Union([primitives_1.String(), primitives_1.Long()]);
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// logicals
_ = () => {
    const instance = union_1.Union([
        logicalType_1.LogicalType(primitives_1.String(), 'timestamp-utc'),
        logicalType_1.LogicalType(primitives_1.Long(), 'timestamp-millis')
    ]);
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};
// other unions
_ = () => {
    const instance = union_1.Union([
        union_1.Union([primitives_1.String(), primitives_1.Long()]),
        union_1.Union([primitives_1.String(), primitives_1.Boolean()])
    ]);
    const _actualIsExpected = null;
    const _expectedIsActual = null;
};

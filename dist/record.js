"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const union_1 = require("./union");
const primitives_1 = require("./primitives");
function Field(props) {
    if (!('doc' in props || 'default' in props))
        return { type: props };
    else if ('default' in props && props.default === null) {
        return Object.assign(Object.assign({}, props), { type: union_1.Union([primitives_1.Null(), props.type]) });
    }
    else
        return props;
}
exports.Field = Field;
const Record = (name, fields) => ({
    type: "record",
    name,
    fields: Object.keys(fields).map(name => (Object.assign({ name }, fields[name])))
});
exports.Record = Record;

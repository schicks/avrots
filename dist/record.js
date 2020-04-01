"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Field(props) {
    return ('doc' in props || 'default' in props
        ? props
        : { type: props });
}
exports.Field = Field;
const Record = (name, fields) => ({
    type: "record",
    name,
    fields: Object.keys(fields).map(name => (Object.assign({ name }, fields[name])))
});
exports.Record = Record;

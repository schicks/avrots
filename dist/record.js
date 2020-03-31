"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Record = (name, fields) => ({
    type: "record",
    name,
    fields: Object.keys(fields).map(name => ({ name, type: fields[name] }))
});
exports.Record = Record;

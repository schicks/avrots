"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String = (name) => ({
    name,
    type: 'string'
});
exports.String = String;
const Null = (name) => ({
    name,
    type: 'null'
});
exports.Null = Null;
const Boolean = (name) => ({
    name,
    type: 'boolean'
});
exports.Boolean = Boolean;
const Int = (name) => ({
    name,
    type: 'int'
});
exports.Int = Int;
const Long = (name) => ({
    name,
    type: 'long'
});
exports.Long = Long;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogicalType = (name, type, logicalType) => ({
    name,
    type: {
        type,
        logicalType
    }
});
exports.LogicalType = LogicalType;

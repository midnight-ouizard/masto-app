"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var presets_1 = require("ts-jest/presets");
// Sync object
var config = {
    verbose: true,
    transform: __assign({}, presets_1.jsWithTs.transform),
    modulePathIgnorePatterns: [
        '<rootDir>/amplify/#current-cloud-backend/',
        '.build/',
    ],
};
exports.default = config;

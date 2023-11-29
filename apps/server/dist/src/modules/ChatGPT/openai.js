"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var openai_1 = __importDefault(require("openai"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
exports.default = openai;

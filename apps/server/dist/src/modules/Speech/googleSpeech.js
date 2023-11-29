"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var text_to_speech_1 = __importDefault(require("@google-cloud/text-to-speech"));
// import dotenv from 'dotenv'
// dotenv.config()
var googleSpeech = new text_to_speech_1.default.TextToSpeechClient();
exports.default = googleSpeech;

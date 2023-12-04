"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSingleWordByTerm = exports.createWordsByTopic = exports.updateWordProperty = exports.getWords = void 0;
var user_model_1 = require("../User/user.model");
var word_model_1 = require("./word.model");
var chatGPT_controller_1 = require("../ChatGPT/chatGPT.controller");
var const_1 = require("../../lib/const");
var speech_model_1 = require("../Speech/speech.model");
var languagesConfig_1 = require("../../lib/languagesConfig");
var image_model_1 = require("../Image/image.model");
function getWords(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, word_model_1.getWordsByUserId)(userId)];
        });
    });
}
exports.getWords = getWords;
function updateWordProperty(wordId, key, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, (0, word_model_1.patchSingleWordProperty)(wordId, key, data)];
        });
    });
}
exports.updateWordProperty = updateWordProperty;
function createWordsByTopic(userId, topic) {
    return __awaiter(this, void 0, void 0, function () {
        var user, generatedWordPairs, createdWords, language, selectedVoice, i, voice, voiceSlow, image, wordToCreate, createdWord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, user_model_1.getUserById)(userId)];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new Error("User doesn't exist");
                    }
                    if (topic === "") {
                        throw new Error("Topic can't be empty");
                    }
                    return [4 /*yield*/, (0, chatGPT_controller_1.createWordListByTopic)(user, topic)];
                case 2:
                    generatedWordPairs = _a.sent();
                    createdWords = [];
                    language = user.userTargetLang;
                    selectedVoice = languagesConfig_1.languages[language].voice;
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < generatedWordPairs.length)) return [3 /*break*/, 9];
                    return [4 /*yield*/, (0, speech_model_1.getGoogleVoice)(generatedWordPairs[i][1], language, selectedVoice, const_1.speakingRateNormal)];
                case 4:
                    voice = _a.sent();
                    return [4 /*yield*/, (0, speech_model_1.getGoogleVoice)(generatedWordPairs[i][1], language, selectedVoice, const_1.speakingRateSlow)];
                case 5:
                    voiceSlow = _a.sent();
                    return [4 /*yield*/, (0, image_model_1.getImageByKeyword)(generatedWordPairs[i][0])];
                case 6:
                    image = _a.sent();
                    wordToCreate = {
                        userId: userId,
                        srcWord: generatedWordPairs[i][0],
                        targetWord: generatedWordPairs[i][1],
                        imgUrl: image === null || image === void 0 ? void 0 : image.imgUrl,
                        credits: image === null || image === void 0 ? void 0 : image.credits,
                        creditsUrl: image === null || image === void 0 ? void 0 : image.creditsUrl,
                        voice: voice,
                        voiceSlow: voiceSlow
                    };
                    return [4 /*yield*/, (0, word_model_1.createWord)(wordToCreate)];
                case 7:
                    createdWord = _a.sent();
                    createdWords.push(createdWord);
                    _a.label = 8;
                case 8:
                    i++;
                    return [3 /*break*/, 3];
                case 9: return [2 /*return*/, createdWords];
            }
        });
    });
}
exports.createWordsByTopic = createWordsByTopic;
function createSingleWordByTerm(userId, term) {
    return __awaiter(this, void 0, void 0, function () {
        var user, generatedSingleTerm, createdWords, language, selectedVoice, voice, voiceSlow, image, wordToCreate, createdWord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, user_model_1.getUserById)(userId)];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        throw new Error("User doesn't exist");
                    }
                    if (term === "") {
                        throw new Error("Topic can't be empty");
                    }
                    return [4 /*yield*/, (0, chatGPT_controller_1.createWordListByTopic)(user, topic)];
                case 2:
                    generatedSingleTerm = _a.sent();
                    createdWords = [];
                    language = user.userTargetLang;
                    selectedVoice = languagesConfig_1.languages[language].voice;
                    return [4 /*yield*/, (0, speech_model_1.getGoogleVoice)(generatedSingleTerm[1], language, selectedVoice, const_1.speakingRateNormal)];
                case 3:
                    voice = _a.sent();
                    return [4 /*yield*/, (0, speech_model_1.getGoogleVoice)(generatedSingleTerm[1], language, selectedVoice, const_1.speakingRateSlow)];
                case 4:
                    voiceSlow = _a.sent();
                    return [4 /*yield*/, (0, image_model_1.getImageByKeyword)(generatedSingleTerm[0])];
                case 5:
                    image = _a.sent();
                    wordToCreate = {
                        userId: userId,
                        srcWord: generatedSingleTerm[0],
                        targetWord: generatedSingleTerm[1],
                        imgUrl: image === null || image === void 0 ? void 0 : image.imgUrl,
                        credits: image === null || image === void 0 ? void 0 : image.credits,
                        creditsUrl: image === null || image === void 0 ? void 0 : image.creditsUrl,
                        voice: voice,
                        voiceSlow: voiceSlow
                    };
                    return [4 /*yield*/, (0, word_model_1.createWord)(wordToCreate)];
                case 6:
                    createdWord = _a.sent();
                    return [2 /*return*/, [createdWord]];
            }
        });
    });
}
exports.createSingleWordByTerm = createSingleWordByTerm;

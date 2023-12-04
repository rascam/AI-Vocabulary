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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server = (0, express_1.default)();
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var PORT = process.env.PORT || 3000;
var user_controller_1 = require("./modules/User/user.controller");
var word_controller_1 = require("./modules/Word/word.controller");
// Middleware
var morgan_1 = __importDefault(require("morgan"));
server.use((0, morgan_1.default)('dev'));
var cors_1 = __importDefault(require("cors"));
server.use((0, cors_1.default)());
server.use(express_1.default.json());
// Define your routes here
server.get("/users/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, user_controller_1.getUser)(userId)];
            case 2:
                user = _a.sent();
                res.json(user);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(500).json({ error: "An error occurred while fetching the user" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.post("/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, password, userId, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                email = req.body.email;
                password = req.body.password;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, user_controller_1.loginUser)(email, password)];
            case 2:
                userId = _a.sent();
                res.json(userId);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(400).json({ error: "An error occurred while logging in" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.patch("/users/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                if (!req.body.key || req.body.value === undefined) {
                    res.status(400).json({ error: "Key or value not provided" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, user_controller_1.updateUserProperty)(userId, req.body.key, req.body.value)];
            case 2:
                user = _a.sent();
                res.json(user);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(500).json({ error: "An error occurred updating a user property" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.get("/users/:id/words", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, word_controller_1.getWords)(userId)];
            case 2:
                user = _a.sent();
                res.json(user);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                res.status(500).json({ error: "An error occurred while fetching the user" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.patch("/words/:wordId", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var wordId, word, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                wordId = parseInt(req.params.wordId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                if (!req.body.key || req.body.value === undefined) {
                    res.status(400).json({ error: "Key or value not provided" });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, word_controller_1.updateWordProperty)(wordId, req.body.key, req.body.value)];
            case 2:
                word = _a.sent();
                res.json(word);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                res.status(500).json({ error: "An error occurred updating a user property" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.post("/users/:id/topic", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, topic, newWords;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.params.id;
                topic = req.query.topic;
                return [4 /*yield*/, (0, word_controller_1.createWordsByTopic)(userId, topic)];
            case 1:
                newWords = _a.sent();
                res.status(201).json(newWords);
                return [2 /*return*/];
        }
    });
}); });
server.post("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, createdUserId, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, user_controller_1.registerUser)(user)];
            case 2:
                createdUserId = _a.sent();
                res.status(201).json(createdUserId);
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                console.error(error_6);
                res.status(500).json({ error: "An error occurred while creating the user" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
server.get("/", function (_, res) {
    console.log("Root route");
    res.send("Root route");
});
function startServer() {
    server.listen(PORT, function () {
        console.log("server listening on port ".concat(PORT));
    });
}
exports.default = startServer;

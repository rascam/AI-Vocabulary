"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPromptForTopic = void 0;
var languagesConfig_1 = require("../../lib/languagesConfig");
var const_1 = require("../../lib/const");
function createPromptForTopic(user, topic) {
    var prompt = "";
    var srcLang = "".concat(languagesConfig_1.languages[user.userSrcLang].language);
    var srcLang2 = "".concat(languagesConfig_1.languages[user.userSrcLang].language2 || "");
    var targetLang = "".concat(languagesConfig_1.languages[user.userTargetLang].language);
    var targetLang2 = "".concat(languagesConfig_1.languages[user.userTargetLang].language2 || "");
    prompt += "Write a numbered vocabulary list of ".concat(const_1.amountOfNewWords, " new words with their articles but without explanations, ");
    if (topic) {
        prompt += "all around the topic \"".concat(topic, "\", ");
    }
    prompt += "for someone ".concat(srcLang2 || srcLang, " who is learning ").concat(targetLang2 || "", " ").concat(targetLang, " on a ").concat(user.userLevel, " level.");
    if (user.words.length > 0) {
        prompt += "Exclude the following words:\n";
        for (var i = 0; i < user.words.length; i++) {
            prompt += "".concat(user.words[i].srcWord, "\n");
        }
    }
    prompt += "\n\n  The numbered list has to be in the format:\n\n  #. ".concat(srcLang, " $$ ").concat(targetLang, "\n");
    return prompt;
}
exports.createPromptForTopic = createPromptForTopic;

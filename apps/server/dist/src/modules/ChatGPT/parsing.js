"use strict"
Object.defineProperty(exports, "__esModule", { value: true })
exports.parseWordList = void 0
function parseWordList(text) {
  var generatedWordPairs = []
  var lines = text.split(/\d+\. /gm).filter(function (word) {
    return word.length > 6
  })
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].includes("$$")) {
      var pairs = lines[i].split(/\$\$/gm)
      generatedWordPairs.push([pairs[0].trim(), pairs[1].trim()])
    } else {
      console.log("Result line ,", lines[i], "is not containing $$")
    }
  }
  return generatedWordPairs
}
exports.parseWordList = parseWordList

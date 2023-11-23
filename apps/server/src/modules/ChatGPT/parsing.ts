

export function parseWordList (text: string) {
  const generatedWordPairs: [string, string][] = []

  const lines = text
  .split(/\d+\. /gm)
  .filter((word) => word.length > 6)
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("$$")) {
      console.log(`lines[${i}]: `, lines[i])
      const pairs = lines[i].split(/\$\$/gm)
    generatedWordPairs.push([pairs[0].trim(), pairs[1].trim()])
  } else {
    console.log("Result line ,", lines[i], "is not containing $$")
  }
}
  return generatedWordPairs
}

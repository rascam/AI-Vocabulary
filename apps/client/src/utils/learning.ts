import { Word } from "./types"

const learning = {
  
  initLearnStack: (words: Word[]) => {

    const learnStack = words.filter((word: Word) => word.bin < 4)

    for (let i = learnStack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [learnStack[i], learnStack[j]] = [learnStack[j], learnStack[i]];
    }  
    return learnStack
  }
}

export default learning
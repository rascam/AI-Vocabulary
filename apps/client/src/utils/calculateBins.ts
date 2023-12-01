import { Word } from '../lib/types'

function calculateBins (words: Word[]) {
  const bins = [0, 0, 0, 0, 0]
  if (words.length > 0) {
  for (const word of words) {
    bins[word.bin] += 1
  }
}
  return bins
}

export default calculateBins
import { SudokuCellule } from 'lib-effondrement'

export const numberToNote = (number: SudokuCellule) => {
  if (!number) {
    return 'C'
  }
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  return notes[(number - 1) % 7] + Math.floor((number - 1) / 7)
}

import { SudokuGrid } from '../sudoku'

export function prettyPrintGrid(grid: SudokuGrid): string {
  return grid.map((row) => `[${row.join(',')}]`).join('\n')
}

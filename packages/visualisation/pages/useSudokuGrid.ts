import { Sudoku, SudokuGrid } from 'effondrement'

export function useSudokuGrid() {
  const initialSudokuGrid: SudokuGrid = [
    [0, 0, 0, 0, 0, 0, 0, 8, 0],
    [2, 7, 0, 9, 0, 8, 0, 0, 5],
    [0, 0, 5, 0, 1, 0, 0, 7, 0],
    [0, 0, 0, 4, 0, 0, 0, 6, 7],
    [0, 0, 2, 0, 8, 0, 0, 5, 4],
    [7, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 9, 1, 4, 0, 0, 0, 8],
    [3, 0, 1, 8, 0, 0, 0, 4, 2],
    [0, 0, 0, 3, 0, 2, 1, 9, 6],
  ]
  const initialSudoku = new Sudoku()
  initialSudoku.initialize(initialSudokuGrid)
  const sudoku = ref<Sudoku>(initialSudoku)

  function propager() {
    sudoku.value.collapseWaveFunction()
  }
  return { sudoku, propager }
}

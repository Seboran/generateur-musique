import { Sudoku, SudokuGrid } from 'effondrement'

export function useSudokuGrid() {
  const initialSudokuGrid: SudokuGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  const initialSudoku = new Sudoku()
  initialSudoku.initialize(initialSudokuGrid)
  const sudoku = ref<Sudoku>(initialSudoku)

  function propager() {
    sudoku.value.collapseWaveFunction()
  }

  watch(
    () => sudoku.value.grid,
    () => propager(),
    { deep: true },
  )

  return { sudoku, propager }
}

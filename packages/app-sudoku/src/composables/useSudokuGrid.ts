import { Sudoku, type SudokuGrid } from 'lib-effondrement'
import { ref, watch } from 'vue'

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

const initialSudokuGrid: SudokuGrid = [
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 7, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 8, 0, 0],
  [0, 0, 2, 0, 0, 1, 0, 0, 0],
  [0, 5, 9, 4, 0, 7, 2, 6, 1],
  [0, 1, 0, 0, 0, 2, 0, 3, 0],
  [1, 0, 0, 0, 4, 0, 0, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 1, 0],
  [0, 2, 0, 0, 1, 0, 0, 0, 0],
]

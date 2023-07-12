<template>
  <div><AfficherGrilleSudoku :grid="sudoku.grid" /></div>
  <button type="button" @click="propager">Propager</button>
</template>

<script setup lang="ts">
import { Sudoku, SudokuGrid } from 'effondrement'
const initialSudokuGrid: SudokuGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 5, 0, 0, 0, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 8, 0, 0],
  [6, 0, 0, 3, 0, 0, 0, 0, 0],
  [7, 0, 5, 0, 0, 0, 0, 0, 0],
  [8, 1, 4, 0, 0, 0, 0, 0, 0],
  [9, 2, 3, 0, 1, 0, 0, 0, 0],
]
const initialSudoku = new Sudoku()
initialSudoku.initialize(initialSudokuGrid)
const sudoku = ref<Sudoku>(initialSudoku)

function propager() {
  sudoku.value.collapseWaveFunction()
}
</script>

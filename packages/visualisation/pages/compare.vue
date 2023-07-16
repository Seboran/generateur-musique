<template>
  <div class="flex flex-col">
    <div class="flex flex-row space-x-5">
      <SudokuAfficherGrille :model-value="sudoku.grid" />
      <ClientOnly>
        <MusiqueSheet :grilleAccords="sudoku.grid" />
      </ClientOnly>
    </div>
    <BoutonPropagation @click="propager" />
  </div>
</template>

<script setup lang="ts">
import { Sudoku, SudokuGrid } from 'effondrement'
const initialSudokuGrid: SudokuGrid = [
  [0, 0, 0, 0, 7, 0, 0, 8, 0],
  [2, 7, 4, 9, 0, 8, 0, 0, 5],
  [0, 0, 5, 0, 1, 0, 2, 7, 0],
  [1, 0, 0, 4, 0, 0, 0, 6, 7],
  [0, 0, 2, 0, 8, 0, 0, 5, 4],
  [7, 4, 0, 5, 0, 0, 9, 0, 0],
  [5, 0, 9, 1, 4, 0, 0, 0, 8],
  [3, 0, 1, 8, 9, 0, 0, 4, 2],
  [0, 8, 0, 3, 0, 2, 1, 9, 6],
]
const initialSudoku = new Sudoku()
initialSudoku.initialize(initialSudokuGrid)
const sudoku = ref<Sudoku>(initialSudoku)

function propager() {
  sudoku.value.collapseWaveFunction()
}
</script>

<style scoped></style>

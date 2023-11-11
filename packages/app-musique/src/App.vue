<template>
  <AppLayout>
    <div>
      <MusiqueSheet :grilleAccords="sudoku.grid" class="h-screen w-screen" />
      <StyledBouton @click="propager">Propager</StyledBouton>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { Sudoku, type SudokuGrid } from 'lib-effondrement'
import { ref } from 'vue'
import AppLayout from './components/AppLayout.vue'
import MusiqueSheet from './components/MusiqueSheet.vue'
import StyledBouton from './components/styled/StyledBouton.vue'
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

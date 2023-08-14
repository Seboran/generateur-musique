<template>
  <div class="h-90">
    <table>
      <SudokuAfficherLigne
        v-for="(ligne, index) in grid"
        :key="index"
        v-model="grid[index]"
        :possibilites="possibilites[index]"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
import { Sudoku, SudokuGrid, SudokuPossibilitesCellule } from 'lib-effondrement'

defineProps<{
  possibilites: SudokuPossibilitesCellule[][]
  grid: SudokuGrid
}>()
</script>

<style scoped></style>
